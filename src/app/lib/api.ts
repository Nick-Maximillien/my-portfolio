// src/lib/api.ts
import axios from 'axios';

const API_BASE = 'http://localhost:8000';

export interface ForensicPayload {
  case_id: string;
  query: string;
  mode?: 'audit' | 'research'; // Added mode
  claim_data: {
    events: Array<{
      name: string;
      timestamp: string;
      value?: number;
      unit?: string;
    }>;
  };
}

export interface ForensicResponse {
  task_id: string;
  status: 'PENDING' | 'RUNNING' | 'CLEARED' | 'HALTED' | 'COMPLETED' | 'ERROR';
  verdict: 'VALID' | 'INVALID' | 'UNKNOWN'; // Added UNKNOWN for running states
  
  // 1. THE NARRATIVE (LLM Generated)
  audit_result: {
    certification_statement?: string;
    compliance_matrix?: Array<{ rule_code: string; status: string }>;
    evidence_traces?: Array<{ event: string; timestamp: string }>;
    llm_explanation?: string; // Added for Research Mode
  };

  // 2. THE EVIDENCE (Deterministic / Immutable)
  forensic_evidence: {
    is_valid: boolean;
    passed_rules?: Array<{
      code: string;
      protocol: string;
      text: string;
      type: string;
    }>;
    retrieved_facts?: Array<{ // Added for Research Mode
        rule_code: string;
        protocol: { title: string };
        text: string;
    }>;
    violations: Array<{
      rule: { code: string; text: string };
      protocol: { title: string };
      validation_trace: string;
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

// 1. Trigger the Agent (Fire and Forget or Wait)
export const runForensicAgent = async (payload: ForensicPayload): Promise<ForensicResponse> => {
  try {
    const backendPayload = { ...payload, specialty: 'auto' };
    const response = await axios.post(`${API_BASE}/forensic/reasoning/`, backendPayload);
    return response.data;
  } catch (error) {
    console.error("API Error (Trigger):", error);
    throw error;
  }
};

// 2. Poll for Updates (Real-Time Logs)
export const getTaskStatus = async (taskId: string): Promise<ForensicResponse> => {
    try {
        // You might need to add a GET endpoint in Django for this:
        // path('forensic/task/<str:task_id>/', ForensicTaskView.as_view())
        // If you don't have a specific GET endpoint yet, we can't poll.
        // Assuming you will add a GET endpoint or use the POST to return intermediate status.
        
        // FOR NOW: If your POST waits for completion, polling isn't needed. 
        // BUT for "Real Time" visualization on a long request, we need a separate check.
        const response = await axios.get(`${API_BASE}/forensic/task/${taskId}/`); 
        return response.data;
    } catch (error) {
        console.error("API Error (Polling):", error);
        throw error;
    }
}

// 3. File Upload Wrapper
export const uploadForensicDocument = async (
  file: File, 
  query: string
): Promise<ForensicResponse> => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('query', query);
    formData.append('specialty', 'auto');
    formData.append('mode', 'audit');
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