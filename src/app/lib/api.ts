// src/lib/api.ts
import axios from 'axios';

const API_BASE = 'http://localhost:8000';

export interface ForensicPayload {
  case_id: string;
  query: string;
  // [UPDATE] Added 'iot_stream' to allow IoT Agent routing
  mode?: 'audit' | 'research' | 'iot_stream';
  // Full System Grade Scope Support
  scope?: 'clinical' | 'facility' | 'billing' | 'legal'; 
  claim_data: {
    events: Array<{
      name: string;
      timestamp: string;
      // [UPDATE] Allow string values (e.g. "ONLINE"/"OFFLINE") and semantic type
      value?: number | string;
      unit?: string;
      type?: string;
    }>;
  };
}

export interface ForensicResponse {
  task_id: string;
  case_id?: string;
  status: 'PENDING' | 'RUNNING' | 'CLEARED' | 'HALTED' | 'COMPLETED' | 'ERROR';
  verdict: 'VALID' | 'INVALID' | 'UNKNOWN';
  
  // [UPDATE] Added optional fields for Auditor Dashboard visualization
  created_at?: string;
  notification_channel?: string;

  // [NEW] The Raw Evidence (Sensor Data for Visualization)
  claim_data?: {
    events: Array<{
      name: string;
      value: string | number;
      type?: string;
      unit?: string;
      timestamp?: string;
    }>;
  };

  // 1. THE NARRATIVE (LLM Generated)
  audit_result: {
    certification_statement?: string;
    compliance_matrix?: Array<{ rule_code: string; status: string }>;
    evidence_traces?: Array<{ event: string; timestamp: string }>;
    llm_explanation?: string;
  };

  // 2. THE EVIDENCE (Deterministic / Immutable)
  forensic_evidence: {
    is_valid?: boolean;
    mode?: string;
    
    // Audit Mode Artifacts
    passed_rules?: Array<{
      code: string;
      protocol: string;
      text: string;
      type: string;
    }>;
    
    violations?: Array<{
      rule: { 
        code: string; 
        text: string; 
        scope?: string[];   
        intent?: string[];  
      };
      protocol: { title: string };
      validation_trace: string;
    }>;

    // Research Mode Artifacts
    retrieved_facts?: Array<{
        rule_code: string;
        protocol: { title: string };
        text: string;
        scope?: string[];   
        intent?: string[];  
    }>;
  };

  // 3. THE TRACE
  agent_trace?: Array<{
    timestamp: string;
    step: string;
    message: string;
    status: string;
  }>;
}

// 1. Trigger the Agent
export const runForensicAgent = async (payload: ForensicPayload): Promise<ForensicResponse> => {
  try {
    // Default to 'clinical' scope if not provided to ensure patient safety checks
    const backendPayload = { 
        ...payload, 
        specialty: 'auto',
        scope: payload.scope || 'clinical' 
    };
    const response = await axios.post(`${API_BASE}/forensic/reasoning/`, backendPayload);
    return response.data;
  } catch (error) {
    console.error("API Error (Trigger):", error);
    throw error;
  }
};

// 2. File Upload Wrapper
export const uploadForensicDocument = async (
  file: File, 
  query: string,
  scope: string = 'clinical' 
): Promise<ForensicResponse> => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('query', query);
    formData.append('specialty', 'auto');
    formData.append('mode', 'audit');
    formData.append('scope', scope); // Pass scope to backend
    formData.append('case_id', `PDF-${Date.now()}`);

    const response = await axios.post(`${API_BASE}/forensic/reasoning/`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    
    return response.data;
  } catch (error) {
    console.error("API Error (File Upload):", error);
    throw error;
  }
};