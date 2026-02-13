"use client";

import React, { useState, useEffect } from "react";
import {
  Activity,
  Droplet,
  Zap,
  Wifi,
  AlertTriangle,
  CheckCircle,
  Server,
  Radio
} from "lucide-react";
import { runForensicAgent, ForensicPayload } from "../lib/api";

type IoTState = {
  gridPower: boolean;
  generatorStatus: boolean;
  waterLevel: number;
  oxygenPressure: number;
};

// Device only knows transmission status, not legal verdict
type TransmissionStatus = "IDLE" | "SENDING" | "SENT" | "ERROR";

export default function IoTSimulatorPage() {
  const [state, setState] = useState<IoTState>({
    gridPower: true,
    generatorStatus: false,
    waterLevel: 85,
    oxygenPressure: 2200,
  });

  const [status, setStatus] = useState<TransmissionStatus>("IDLE");
  const [autoStream, setAutoStream] = useState(false);

  const generatePayload = (): ForensicPayload => {
    return {
      case_id: `IOT-${Date.now()}`,
      scope: "facility",
      mode: "iot_stream",
      query: "Real-time infrastructure compliance check",
      claim_data: {
        events: [
          {
            name: "Main Grid Power",
            type: "Infrastructure Status",
            value: state.gridPower ? "ONLINE" : "OFFLINE",
            timestamp: new Date().toISOString(),
          },
          {
            name: "Backup Generator",
            type: "Infrastructure Status",
            value: state.generatorStatus ? "ONLINE" : "OFFLINE",
            timestamp: new Date().toISOString(),
          },
          {
            name: "Water Reservoir Level",
            type: "Resource Level",
            value: state.waterLevel,
            unit: "%",
            timestamp: new Date().toISOString(),
          },
          {
            name: "Oxygen Manifold Pressure",
            type: "Clinical Resource",
            value: state.oxygenPressure,
            unit: "PSI",
            timestamp: new Date().toISOString(),
          },
        ],
      },
    };
  };

  const transmitData = async () => {
    setStatus("SENDING");
    try {
      const payload = generatePayload();
      // Dumb Sensor Logic: Fire and Forget. We do not check verdict.
      await runForensicAgent(payload);
      
      setStatus("SENT");
      // Reset to IDLE after 1.5s
      setTimeout(() => setStatus("IDLE"), 1500);
    } catch (e) {
      console.error("Transmission failed", e);
      setStatus("ERROR");
    }
  };

  useEffect(() => {
    if (autoStream) {
      const t = setTimeout(transmitData, 2000);
      return () => clearTimeout(t);
    }
  }, [state, autoStream, status]); // Added status dependency for loop

  return (
    <div className="iot-root">
      <style jsx>{`
        .iot-root {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(
            1400px 600px at 50% -30%,
            #101826,
            #030407
          );
          color: #cbd5e1;
          font-family: system-ui, sans-serif;
        }

        .device {
          width: 420px;
          background: linear-gradient(
            180deg,
            #141b26,
            #070b11 60%,
            #05080d
          );
          border-radius: 26px;
          border: 1px solid #273142;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04),
            0 50px 120px rgba(0, 0, 0, 0.9);
          overflow: hidden;
        }

        .header {
          padding: 14px 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: linear-gradient(180deg, #0e1522, #070b11);
          border-bottom: 1px solid #2a3546;
        }

        .led {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: ${status === "SENDING" ? "#f59e0b" : status === "ERROR" ? "#ef4444" : "#22c55e"};
          box-shadow: 0 0 14px
            ${status === "SENDING"
              ? "rgba(245,158,11,0.9)"
              : status === "ERROR" ? "rgba(239, 68, 68, 0.9)" : "rgba(34,197,94,0.9)"};
        }

        .screen {
          padding: 30px;
          text-align: center;
          border-bottom: 1px solid #273142;
          font-family: ui-monospace, monospace;
          background: repeating-linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.02),
              rgba(255, 255, 255, 0.02) 1px,
              transparent 1px,
              transparent 3px
            ),
            linear-gradient(180deg, #05080d, #020409);
        }

        /* REPURPOSED STYLES FOR TRANSMISSION STATUS */
        .screen.cleared {
          color: #22c55e;
          text-shadow: 0 0 16px rgba(34, 197, 94, 0.6);
        }

        .screen.halted {
          color: #ef4444;
          background: repeating-linear-gradient(
              to bottom,
              rgba(255, 0, 0, 0.05),
              rgba(255, 0, 0, 0.05) 1px,
              transparent 1px,
              transparent 3px
            ),
            radial-gradient(circle at top, #3a0a0a, #020409);
        }
        
        .screen.pending { color: #64748b; }
        .screen.sending { color: #38bdf8; text-shadow: 0 0 10px rgba(56, 189, 248, 0.5); }

        .controls {
          padding: 22px;
          display: grid;
          gap: 14px;
        }

        .card {
          background: linear-gradient(180deg, #0f172a, #05080d);
          border: 1px solid #2a3546;
          border-radius: 12px;
          padding: 12px 14px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }

        .toggle {
          width: 44px;
          height: 22px;
          border-radius: 999px;
          padding: 3px;
          background: #020617;
          border: 1px solid #334155;
          cursor: pointer;
        }

        .toggle.on {
          background: linear-gradient(90deg, #16a34a, #22c55e);
        }

        .toggle.blue.on {
          background: linear-gradient(90deg, #0284c7, #38bdf8);
        }

        .knob {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #fff, #cbd5e1);
          transition: transform 0.25s;
        }

        .toggle.on .knob {
          transform: translateX(22px);
        }

        input[type="range"] {
          width: 100%;
          accent-color: #38bdf8;
        }

        .btn {
          padding: 14px;
          border-radius: 12px;
          font-weight: 900;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          border: none;
          letter-spacing: 0.04em;
        }

        .btn.primary {
          background: linear-gradient(180deg, #f8fafc, #cbd5f5);
          color: #020617;
          box-shadow: 0 6px 0 #64748b,
            0 14px 40px rgba(0, 0, 0, 0.7);
        }

        .btn.secondary {
          background: linear-gradient(180deg, #0b1220, #05080d);
          border: 1px solid #334155;
          color: #cbd5e1;
        }
      `}</style>

      <div className="device">
        <div className="header">
          <div>
            <div
              style={{ fontWeight: 800, display: "flex", gap: 6 }}
            >
              <Activity size={16} /> MEDGATE IOT
            </div>
            <div style={{ fontSize: 10, opacity: 0.6 }}>
              REMOTE SENSOR UNIT
            </div>
          </div>
          <div className="led" />
        </div>

        <div
          className={`screen ${
            status === "SENT"
              ? "cleared"
              : status === "ERROR"
              ? "halted"
              : status === "SENDING"
              ? "sending"
              : "pending"
          }`}
        >
          {status === "IDLE" && <div>READY TO TRANSMIT</div>}
          
          {status === "SENDING" && (
            <>
              <Radio className="animate-pulse mb-2 mx-auto" size={46} />
              <div>UPLINK ACTIVE...</div>
            </>
          )}

          {status === "SENT" && (
            <>
              <CheckCircle size={46} className="mb-2 mx-auto" />
              <div>SIGNAL ACKNOWLEDGED</div>
            </>
          )}

          {status === "ERROR" && (
            <>
              <AlertTriangle size={46} className="mb-2 mx-auto" />
              <div>CONNECTION FAILURE</div>
            </>
          )}
        </div>

        <div className="controls">
          <div className="card">
            <span className="flex gap-2 items-center text-xs font-bold uppercase">
              <Zap size={14} /> Grid Power
            </span>
            <div
              className={`toggle ${state.gridPower ? "on" : ""}`}
              onClick={() =>
                setState((s) => ({ ...s, gridPower: !s.gridPower }))
              }
            >
              <div className="knob" />
            </div>
          </div>

          <div className="card">
            <span className="flex gap-2 items-center text-xs font-bold uppercase">
              <Zap size={14} /> Generator
            </span>
            <div
              className={`toggle blue ${
                state.generatorStatus ? "on" : ""
              }`}
              onClick={() =>
                setState((s) => ({
                  ...s,
                  generatorStatus: !s.generatorStatus,
                }))
              }
            >
              <div className="knob" />
            </div>
          </div>

          <div className="card" style={{ flexDirection: "column" }}>
            <div className="flex justify-between w-full mb-2 text-xs">
              <span className="flex gap-2 items-center font-bold uppercase">
                <Droplet size={14} /> Water Level
              </span>
              <span className="font-mono text-blue-400">
                {state.waterLevel}%
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={state.waterLevel}
              onChange={(e) =>
                setState((s) => ({
                  ...s,
                  waterLevel: parseInt(e.target.value),
                }))
              }
            />
          </div>

          <div className="card" style={{ flexDirection: "column" }}>
            <div className="flex justify-between w-full mb-2 text-xs">
              <span className="flex gap-2 items-center font-bold uppercase">
                <Activity size={14} /> Oxygen PSI
              </span>
              <span className="font-mono text-green-400">
                {state.oxygenPressure}
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={3000}
              value={state.oxygenPressure}
              onChange={(e) =>
                setState((s) => ({
                  ...s,
                  oxygenPressure: parseInt(e.target.value),
                }))
              }
            />
          </div>

          <div className="flex gap-2">
            <button className="btn primary flex-1" onClick={transmitData}>
              <Server size={16} /> SEND SIGNAL
            </button>
            <button
              className="btn secondary"
              onClick={() => setAutoStream(!autoStream)}
            >
              <Wifi size={16} /> {autoStream ? "LIVE" : "OFF"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}