import { useState, useRef, useEffect } from "react";

// Styles
export const css = `
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&family=Inter:wght@300;400;600&display=swap');

  .sim-root {
    --bg-color: #050b14;
    --card-bg: rgba(13, 27, 42, 0.6);
    --border-color: rgba(30, 58, 138, 0.3);
    --text-primary: #ffffff;
    --text-secondary: #94a3b8;
    --accent-yellow: #f59e0b;
    --accent-red: #ef4444;
    --accent-green: #10b981;
    --accent-blue: #3b82f6;
    --connection-blue: #60a5fa;
    font-family: 'Inter', sans-serif;
    color: var(--text-primary);
    background: linear-gradient(135deg, #07111e 0%, #03060c 100%);
    border: 1px solid rgba(255,255,255,0.05);
    border-radius: 8px;
    padding: clamp(12px, 4vw, 30px);
    width: 100%;
    box-sizing: border-box;
  }

  /* Header */
  .sim-header {
    display: flex; justify-content: space-between; align-items: center;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    padding-bottom: 15px; margin-bottom: 30px;
  }
  .sim-brand { position: relative; padding-left: 15px; }
  .sim-brand::before {
    content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 4px;
    background: linear-gradient(to bottom, #3b82f6 50%, #ef4444 50%);
  }
  .sim-brand-title {
    font-family: 'Orbitron', sans-serif; font-weight: 900; font-size: clamp(10px, 2.5vw, 14px);
    letter-spacing: 1px; color: #f59e0b; text-transform: uppercase;
  }
  .sim-brand-sub { font-size: 11px; color: #94a3b8; margin-top: 2px; }
  .sim-status { display: flex; align-items: center; gap: 8px; font-family: 'Share Tech Mono', monospace; font-size: 11px; letter-spacing: 1px; }
  .sim-status-dot { width: 6px; height: 6px; border-radius: 50%; }
  .sim-offline { color: #ef4444; }
  .sim-offline .sim-status-dot { background: #ef4444; box-shadow: 0 0 8px #ef4444; }
  .sim-online  { color: #10b981; }
  .sim-online  .sim-status-dot { background: #10b981; box-shadow: 0 0 8px #10b981; }

  /* Screen fade */
  .sim-screen { animation: simFadeIn 0.4s ease-in-out forwards; }
  @keyframes simFadeIn { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }

  /* Hero */
  .sim-hero { text-align: center; max-width: 700px; margin: 0 auto 35px; }
  .sim-tag {
    display: inline-block; font-family: 'Share Tech Mono', monospace; font-size: 11px;
    color: #ef4444; border: 1px solid rgba(239,68,68,0.3);
    padding: 3px 12px; border-radius: 20px; margin-bottom: 15px;
    background: rgba(239,68,68,0.05);
  }
  .sim-tag.selecting { color: #3b82f6; border-color: rgba(59,130,246,0.3); background: rgba(59,130,246,0.05); }
  .sim-title { font-family: 'Orbitron', sans-serif; font-weight: 700; font-size: clamp(22px, 4vw, 38px); margin-bottom: 12px; }
  .sim-title span { color: #f59e0b; }
  .sim-desc { color: #94a3b8; font-size: 14px; line-height: 1.6; margin-bottom: 15px; font-weight: 300; }
  .sim-instruction { font-family: 'Share Tech Mono', monospace; color: #10b981; font-size: 13px; }

  /* Pills */
  .sim-pills { display: flex; justify-content: center; gap: 15px; margin: 20px 0; flex-wrap: wrap; }
  .sim-pill {
    font-family: 'Share Tech Mono', monospace; font-size: 12px;
    border: 1px solid rgba(255,255,255,0.1); padding: 6px 16px;
    border-radius: 20px; color: rgba(255,255,255,0.4);
    display: flex; align-items: center; gap: 6px;
  }
  .sim-pill.selected { border-color: #60a5fa; color: #60a5fa; background: rgba(96,165,250,0.05); }

  /* Workspace */
  .sim-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 25px; }
  @media (max-width: 900px) { .sim-grid { grid-template-columns: 1fr; } }

  .sim-map-card {
    background: var(--card-bg); border: 1px solid var(--border-color);
    border-radius: 12px; padding: 20px;
    position: relative; min-height: clamp(280px, 55vw, 420px); display: flex; flex-direction: column;
  }
  .sim-map-header {
    font-family: 'Share Tech Mono', monospace; font-size: 11px;
    color: #94a3b8; letter-spacing: 1px; display: flex; gap: 15px; margin-bottom: 15px;
  }
  .sim-map-header span::before { content: '●'; color: #10b981; margin-right: 5px; }

  .sim-canvas {
    flex-grow: 1; position: relative;
    border: 1px solid rgba(255,255,255,0.03);
    background-image: linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px);
    background-size: 30px 30px; border-radius: 6px; overflow: hidden; min-height: clamp(240px, 48vw, 340px);
  }

  /* Map wrapper */
  .sim-ph-wrapper {
    position: absolute; top: 10px; bottom: 10px;
    left: 40%; transform: translateX(-50%);
    height: calc(100% - 20px); max-width: clamp(160px, 40vw, 260px);
  }
  .sim-ph-img { height: 100%; width: 100%; object-fit: contain; opacity: 0.8; filter: drop-shadow(0 0 15px rgba(30,58,138,0.2)); display: block; }

  /* PLDT node */
  .sim-node-pldt {
    width: 14px; height: 14px; background: #f59e0b;
    border-radius: 50%; box-shadow: 0 0 12px #f59e0b;
    position: absolute; cursor: pointer; transition: transform 0.2s; z-index: 10;
    top: 52.5%; left: 52%; transform: translate(-50%, -50%);
  }
  .sim-node-pldt.selected { width: 16px; height: 16px; animation: nodePulse 1.5s infinite; }
  @keyframes nodePulse { 0% { box-shadow: 0 0 0 0 rgba(245,158,11,0.7); } 70% { box-shadow: 0 0 0 10px rgba(245,158,11,0); } 100% { box-shadow: 0 0 0 0 rgba(245,158,11,0); } }

  .sim-node-label { font-family: 'Share Tech Mono', monospace; font-size: 11px; color: #fff; position: absolute; white-space: nowrap; z-index: 10; font-weight: 600; top: 50.5%; left: 58%; color: #a7f3d0; text-shadow: 0 1px 5px #000, 0 0 3px #000; }
  .sim-node-label span { display: block; font-size: 9px; color: #94a3b8; font-weight: normal; }

  /* Sprint node */
  .sim-us-box {
    position: absolute; right: 15px; top: 38%;
    border: 1px solid rgba(255,255,255,0.1);
    background: rgba(8,17,30,0.9); border-radius: 8px;
    padding: 10px 12px; text-align: center;
    font-family: 'Share Tech Mono', monospace; cursor: pointer; transition: all 0.3s;
  }
  @media (max-width: 480px) {
    .sim-us-box { right: 6px; top: 32%; padding: 6px 8px; }
    .sim-us-box .us-title { font-size: 9px; }
    .sim-us-box .us-gw { font-size: 10px; }
  }
  .sim-us-box.selected { border-color: #60a5fa; box-shadow: 0 0 15px rgba(96,165,250,0.3); }
  .sim-us-box .us-title { font-size: 10px; color: #94a3b8; }
  .sim-us-box .us-gw { font-size: 11px; color: #fff; margin: 4px 0; font-weight: bold; }
  .sim-us-box .us-sub { font-size: 8px; color: rgba(255,255,255,0.4); }
  .sim-us-icon { width:0; height:0; border-left:6px solid transparent; border-right:6px solid transparent; border-bottom:10px solid #60a5fa; margin: 4px auto 0; filter: drop-shadow(0 0 4px #60a5fa); }

  /* SVG link line */
  .sim-svg { position: absolute; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:8; }
  .sim-link { stroke: #60a5fa; stroke-width: 2.5; stroke-dasharray: 6; animation: dash 20s linear infinite; filter: drop-shadow(0 0 6px #60a5fa); }
  @keyframes dash { to { stroke-dashoffset: -1000; } }

  .sim-map-footer { position: absolute; bottom: 15px; left:50%; transform:translateX(-50%); font-family: 'Share Tech Mono', monospace; font-size:10px; color: rgba(255,255,255,0.25); letter-spacing:1px; white-space:nowrap; z-index:5; transition: color 0.3s; }

  /* Info panel */
  .sim-info-panel { display: flex; flex-direction: column; gap: 20px; }
  .sim-status-card { background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 12px; padding: 25px; flex-grow:1; }
  .sim-status-card-title { font-family: 'Orbitron', sans-serif; font-size: 12px; color: #f59e0b; letter-spacing:1px; margin-bottom:20px; font-weight:700; }
  .sim-status-row { display:flex; justify-content:space-between; align-items:center; padding:10px 0; border-bottom:1px solid rgba(255,255,255,0.04); font-family:'Share Tech Mono',monospace; font-size:13px; }
  .sim-status-lbl { color: #94a3b8; }
  .sim-status-val-red { color: #ef4444; font-weight:bold; }
  .sim-footer-txt { margin-top:25px; font-size:12px; color:#94a3b8; line-height:1.5; font-weight:300; }

  /* Action button */
  .sim-btn {
    background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08);
    border-radius: 8px; padding: 15px; text-align: center;
    font-family: 'Orbitron', sans-serif; font-size: 12px; letter-spacing: 2px;
    color: rgba(255,255,255,0.3); text-transform: uppercase;
    cursor: not-allowed; transition: all 0.3s; width:100%;
  }
  .sim-btn.ready {
    background: linear-gradient(to right, #1e3a8a, #2563eb);
    border-color: #60a5fa; color: #fff;
    cursor: pointer; box-shadow: 0 4px 14px rgba(96,165,250,0.3);
  }
  .sim-btn.ready:hover { opacity: 0.9; }

  /* Screen 2: Terminal */
  .sim-est-grid { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 25px; }
  @media (max-width: 900px) { .sim-est-grid { grid-template-columns: 1fr; } }

  .sim-terminal {
    background: #02060c; border: 1px solid #1e293b;
    border-radius: 12px; padding: 20px;
    font-family: 'Share Tech Mono', monospace; font-size: 13px;
    color: #34d399; min-height: clamp(200px, 40vw, 300px);
  }
  .sim-terminal-hdr { color: #94a3b8; margin-bottom: 12px; font-size: 11px; }
  .sim-term-line { margin-bottom: 6px; opacity: 0; transform: translateX(-50px); transition: opacity 0.3s, transform 0.3s; }
  .sim-term-line.print { opacity: 1; transform: translateX(0); }
  .sim-term-accent { color: #f59e0b; }

  /* Historic banner */
  .sim-banner { background: rgba(16,185,129,0.04); border: 1px solid rgba(16,185,129,0.2); border-radius:12px; padding:30px; text-align:center; }
  .sim-sun { font-size:32px; color:#f59e0b; margin:0 auto 10px; animation: rotateSun 20s linear infinite; width:fit-content; }
  @keyframes rotateSun { to { transform: rotate(360deg); } }
  .sim-banner-title { font-family:'Orbitron',sans-serif; font-size:20px; color:#10b981; letter-spacing:1px; margin-bottom:5px; }
  .sim-banner-date { font-family:'Share Tech Mono',monospace; font-size:12px; color:#94a3b8; margin-bottom:20px; }
  .sim-banner-txt { font-size:13px; color:#94a3b8; line-height:1.6; margin-bottom:25px; text-align:justify; }
  .sim-metrics { display:flex; flex-wrap:wrap; gap:10px; justify-content:center; margin-bottom:25px; }
  .sim-metric { background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.08); padding:8px 15px; border-radius:6px; text-align:center; min-width:90px; }
  .sim-metric-val { font-family:'Share Tech Mono',monospace; font-size:14px; color:#f59e0b; font-weight:bold; }
  .sim-metric-lbl { font-size:9px; color:#94a3b8; text-transform:uppercase; margin-top:2px; }

  /* Footer credits */
  .sim-credits { text-align:center; font-family:'Share Tech Mono',monospace; font-size:10px; color:rgba(255,255,255,0.15); margin-top:20px; letter-spacing:0.5px; }
`;

// Terminal script lines
const TERMINAL_LINES = [
  { html: "> Initializing Cisco 7000 router...",           delay: 200  },
  { html: "> Configuring Sprint 64kbps leased line...",    delay: 600  },
  { html: "> Sending TCP/IP handshake packet...",          delay: 1100 },
  { html: "> Awaiting ACK from Sprint gateway...",         delay: 1700 },
  { html: "> ACK received from 204.59.0.1",               delay: 2200 },
  { html: "> BGP route established...",                    delay: 2600 },
  { html: "> IP address assigned: <span class='sim-term-accent'>202.57.0.1</span>", delay: 3000 },
  { html: "> <span class='sim-term-accent'>Connection ESTABLISHED ✓</span>",        delay: 3400 },
  { html: "> Philippines is now ONLINE.",                  delay: 3800 },
];

// Component
export default function InternetSimulation({ mapSrc = "/Metro_manila_map.png" }) {
  // steps: 'initial' | 'selecting' | 'ready' | 'connected'
  const [step,        setStep]        = useState("initial");
  const [pldtSel,     setPldtSel]     = useState(false);
  const [sprintSel,   setSprintSel]   = useState(false);
  const [isOnline,    setIsOnline]    = useState(false);
  const [termLines,   setTermLines]   = useState([]);
  const [bannerVis,   setBannerVis]   = useState(false);
  const [linkCoords,  setLinkCoords]  = useState(null);

  const canvasRef = useRef(null);
  const pldtRef   = useRef(null);
  const sprintRef = useRef(null);

  // Inject fonts/styles once
  useEffect(() => {
    if (document.getElementById("sim-injected-css")) return;
    const style = document.createElement("style");
    style.id = "sim-injected-css";
    style.textContent = css;
    document.head.appendChild(style);
  }, []);

  // Recalculate SVG line whenever selections change
  useEffect(() => {
    if ((!pldtSel && !sprintSel) || !canvasRef.current || !pldtRef.current || !sprintRef.current) return;
    const cb = canvasRef.current.getBoundingClientRect();
    const pb = pldtRef.current.getBoundingClientRect();
    const sb = sprintRef.current.getBoundingClientRect();
    setLinkCoords({
      x1: pb.left - cb.left + 7,
      y1: pb.top  - cb.top  + 7,
      x2: sb.left - cb.left + 20,
      y2: sb.top  - cb.top  + 20,
    });
  }, [pldtSel, sprintSel]);

  function handlePldtClick() {
    if (step === "initial") setStep("selecting");
    if (step === "selecting" || step === "initial") {
      setPldtSel(true);
      if (sprintSel) setStep("ready");
    }
  }

  function handleSprintClick() {
    if (step !== "selecting" && step !== "initial") return;
    setSprintSel(true);
    if (pldtSel) setStep("ready");
  }

  function handleConnect() {
    if (step !== "ready") return;
    setStep("connected");

    TERMINAL_LINES.forEach(({ html, delay }) => {
      setTimeout(() => {
        setTermLines(prev => [...prev, html]);
      }, delay);
    });

    setTimeout(() => {
      setIsOnline(true);
      setBannerVis(true);
    }, 4200);
  }

  function handleReset() {
    setStep("initial");
    setPldtSel(false);
    setSprintSel(false);
    setIsOnline(false);
    setTermLines([]);
    setBannerVis(false);
    setLinkCoords(null);
  }

  const tagClass      = step === "selecting" || step === "ready" ? "sim-tag selecting" : "sim-tag";
  const tagText       = step === "initial"  ? "SIMULATION • PRE-1994 PHILIPPINES"
                      : step === "selecting" || step === "ready" ? "SELECT CONNECTION ROUTE"
                      : "CONNECTION ESTABLISHED";
  const btnClass      = step === "ready" ? "sim-btn ready" : "sim-btn";
  const btnText       = step === "ready" ? "CONNECT TO THE WORLD →" : "Select Both Endpoints First";

  return (
    <div className="sim-root">
      {/* Header */}
      <header className="sim-header">
        <div className="sim-brand">
          <div className="sim-brand-title">Kumusta Mundo: Ang Kaarawan ng Lokal Networks sa Pilipinas</div>
          <div className="sim-brand-sub">The Birth of Philippine Internet — March 29, 1994</div>
        </div>
        <div className={`sim-status ${isOnline ? "sim-online" : "sim-offline"}`}>
          <span className="sim-status-dot" />
          <span>{isOnline ? "ONLINE ✓" : "OFFLINE"}</span>
        </div>
      </header>

      {/* Screen 1: Selection */}
      {step !== "connected" && (
        <div className="sim-screen">
          <section className="sim-hero">
            <div className={tagClass}>{tagText}</div>
            <h1 className="sim-title">
              {step === "initial" ? <>The Philippines, <span>Offline</span></> : "Select the Connection Route"}
            </h1>
            <p className="sim-desc">
              {step === "initial"
                ? "Before March 29, 1994, the Philippines had no direct connection to the global Internet. Universities and businesses operated isolated Bulletin Board Systems and UUCP networks — islands of data in a pre-connected archipelago."
                : "Choose PLDT Makati and the Sprint endpoint to establish the historic link."}
            </p>
            {step === "initial" && (
              <div className="sim-instruction">↓ Click the PLDT Makati node on the map to begin the simulation</div>
            )}
            {(step === "selecting" || step === "ready") && (
              <div className="sim-pills">
                <div className={`sim-pill${pldtSel ? " selected" : ""}`}>{pldtSel ? "✓ PLDT Makati" : "PLDT Makati"}</div>
                <div className={`sim-pill${sprintSel ? " selected" : ""}`}>{sprintSel ? "✓ Sprint USA" : "Sprint USA"}</div>
              </div>
            )}
          </section>

          <main className="sim-grid">
            {/* Map */}
            <section className="sim-map-card">
              <div className="sim-map-header">
                <span>NETWORK MAP</span>
                <span>ASIA-PACIFIC REGION</span>
              </div>
              <div className="sim-canvas" ref={canvasRef}>
                <div className="sim-ph-wrapper">
                  <img src={mapSrc} alt="Metro Manila Regional Map" className="sim-ph-img" />
                  <div
                    className={`sim-node-pldt${pldtSel ? " selected" : ""}`}
                    ref={pldtRef}
                    onClick={handlePldtClick}
                    title="PLDT Makati — click to select"
                  />
                  <div className="sim-node-label">
                    PLDT Makati
                    <span>Sprint Gateway</span>
                  </div>
                </div>

                <div
                  className={`sim-us-box${sprintSel ? " selected" : ""}`}
                  ref={sprintRef}
                  onClick={handleSprintClick}
                  title="Sprint USA — click to select"
                >
                  <div className="us-title">UNITED STATES</div>
                  <div className="us-gw">Sprint Network</div>
                  <div className="us-sub">San Francisco, USA</div>
                  <div className="sim-us-icon" />
                </div>

                {/* SVG connection line */}
                <svg className="sim-svg">
                  {linkCoords && (
                    <line
                      className="sim-link"
                      x1={linkCoords.x1} y1={linkCoords.y1}
                      x2={linkCoords.x2} y2={linkCoords.y2}
                    />
                  )}
                </svg>

                <div
                  className="sim-map-footer"
                  style={step !== "initial" ? { color: "var(--connection-blue)" } : {}}
                >
                  {step === "initial" ? "ISOLATED NETWORKS — PRE-1994" : "SELECT PLDT MAKATI • SPRINT USA"}
                </div>
              </div>
            </section>

            {/* Info panel */}
            <section className="sim-info-panel">
              <div className="sim-status-card">
                <h2 className="sim-status-card-title">NETWORK STATUS</h2>
                <div className="sim-status-row"><span className="sim-status-lbl">Year</span><span>1993</span></div>
                <div className="sim-status-row"><span className="sim-status-lbl">Status</span><span className="sim-status-val-red">ISOLATED</span></div>
                <div className="sim-status-row"><span className="sim-status-lbl">Networks</span><span>BBS / UUCP only</span></div>
                <div className="sim-status-row"><span className="sim-status-lbl">International</span><span>No TCP/IP</span></div>
                <p className="sim-footer-txt">
                  E-mail required expensive international phone calls via UUCP — slow, unreliable, and inaccessible to most Filipinos.
                </p>
              </div>
              <button
                className={btnClass}
                disabled={step !== "ready"}
                onClick={handleConnect}
              >
                {btnText}
              </button>
            </section>
          </main>
        </div>
      )}

      {/* Screen 2: Connection established */}
      {step === "connected" && (
        <div className="sim-screen">
          <main className="sim-est-grid">
            {/* Terminal */}
            <section className="sim-terminal">
              <div className="sim-terminal-hdr">&gt; NETWORK TERMINAL — PLDT MAKATI NODE</div>
              {termLines.map((html, i) => (
                <div
                  key={i}
                  className="sim-term-line print"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              ))}
            </section>

            {/* Historic moment */}
            <section
              className="sim-info-panel"
              style={{
                opacity: bannerVis ? 1 : 0,
                transform: bannerVis ? "translateY(0)" : "translateY(10px)",
                transition: "all 0.5s",
              }}
            >
              <div className="sim-banner">
                <div className="sim-sun">☀️</div>
                <h2 className="sim-banner-title">PHILIPPINES ONLINE</h2>
                <div className="sim-banner-date">March 29, 1994 • 01:15 AM</div>
                <p className="sim-banner-txt">
                  The Philippines became the first Southeast Asian nation to establish a full TCP/IP connection
                  to the global Internet. A 64 kbps leased line via Sprint linked PLDT's facility in Makati to
                  the world — opening a new era for Filipino digital life.
                </p>
                <div className="sim-metrics">
                  <div className="sim-metric"><div className="sim-metric-val">64 kbps</div><div className="sim-metric-lbl">Speed</div></div>
                  <div className="sim-metric"><div className="sim-metric-val">Cisco 7000</div><div className="sim-metric-lbl">Router</div></div>
                  <div className="sim-metric"><div className="sim-metric-val">PLDT / Sprint</div><div className="sim-metric-lbl">Provider</div></div>
                  <div className="sim-metric"><div className="sim-metric-val">TCP/IP</div><div className="sim-metric-lbl">Protocol</div></div>
                </div>
              </div>
              <button className="sim-btn ready" onClick={handleReset}>Restart Simulation ↺</button>
            </section>
          </main>
        </div>
      )}

      <footer className="sim-credits">
        Educational simulation • Based on historical records • PLDT • DOST • NTC Philippines
      </footer>
    </div>
  );
}
