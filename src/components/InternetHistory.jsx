import {useState} from "react";
import { css } from './InternetSimulation.jsx';


export default function InternetHistory({onReplay}){
    const [activeEra, setActiveEra] = useState(0);
    const eras = [
        {
            year: "1994",
            label: "1994",
            name: "First ISPs Emerge",
            icon: "🌐",
            desc: "Following the historic connection, the first commercial Internet Service Providers launched in the Philippines, giving Filipino businesses and academics their first taste of the global web.",
            stats: [
                { val: "3", lbl: "ISPs" },
                { val: "~500", lbl: "Users" },
            ],
        },
        {
            year: "1996",
            label: "1994",
            name: "First ISPs Emerge",
            icon: "🌐",
            desc: "Following the historic connection, the first commercial Internet Service Providers launched in the Philippines, giving Filipino businesses and academics their first taste of the global web.",
            stats: [
                { val: "3", lbl: "ISPs" },
                { val: "~500", lbl: "Users" },
            ],
        },
        {
            year: "1997-1999",
            label: "1997-1999",
            name: "First ISPs Emerge",
            icon: "🌐",
            desc: "Following the historic connection, the first commercial Internet Service Providers launched in the Philippines, giving Filipino businesses and academics their first taste of the global web.",
            stats: [
                { val: "3", lbl: "ISPs" },
                { val: "~500", lbl: "Users" },
            ],
        },
        {
            year: "2000-2004",
            label: "2000-2004",
            name: "First ISPs Emerge",
            icon: "🌐",
            desc: "Following the historic connection, the first commercial Internet Service Providers launched in the Philippines, giving Filipino businesses and academics their first taste of the global web.",
            stats: [
                { val: "3", lbl: "ISPs" },
                { val: "~500", lbl: "Users" },
            ],
        },
        {
            year: "2010",
            label: "2010",
            name: "First ISPs Emerge",
            icon: "🌐",
            desc: "Following the historic connection, the first commercial Internet Service Providers launched in the Philippines, giving Filipino businesses and academics their first taste of the global web.",
            stats: [
                { val: "3", lbl: "ISPs" },
                { val: "~500", lbl: "Users" },
            ],
        },
        {
            year: "2020",
            label: "2020",
            name: "First ISPs Emerge",
            icon: "🌐",
            desc: "Following the historic connection, the first commercial Internet Service Providers launched in the Philippines, giving Filipino businesses and academics their first taste of the global web.",
            stats: [
                { val: "3", lbl: "ISPs" },
                { val: "~500", lbl: "Users" },
            ],
        },
    ];
    return(
        <>
            <style>{css}</style>

            <style>{`
                body {
                    background: #59322B;
                    margin: 0;
                    padding: 24px;
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                
                .sim-connected-bar { display: flex; justify-content: space-between; align-items: center; background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 8px; padding: 12px 18px; margin-bottom: 15px; }
                .sim-connected-status { font-family: 'Share Tech Mono', monospace; font-size: 13px; color: var(--accent-green); display: flex; align-items: center; gap: 6px; }
                .sim-connected-sub { font-size: 11px; color: var(--text-secondary); margin-top: 4px; }
                .sim-replay-btn { font-family: 'Share Tech Mono', monospace; font-size: 11px; color: var(--accent-yellow); background: transparent; border: 1px solid rgba(245,158,11,0.3); border-radius: 6px; padding: 6px 14px; cursor: pointer; }
                .sim-tabs { display: flex; gap: 10px; margin-bottom: 20px; }
                .sim-tab { font-family: 'Share Tech Mono', monospace; font-size: 11px; background: transparent; border: 1px solid rgba(255,255,255,0.1); color: var(--text-secondary); border-radius: 6px; padding: 8px 16px; cursor: pointer; }
                .sim-tab.active { border-color: var(--accent-yellow); color: var(--accent-yellow); background: rgba(245,158,11,0.05); }
                
                
                .sim-story-title { text-align: center; font-family: 'Orbitron', sans-serif; color: var(--accent-yellow); font-size: 18px; letter-spacing: 2px; margin-bottom: 20px; }
                .sim-era-pills { display: flex; justify-content: center; gap: 8px; margin-bottom: 25px; flex-wrap: wrap; }
                .sim-era-pill { font-family: 'Share Tech Mono', monospace; font-size: 11px; background: transparent; border: 1px solid rgba(255,255,255,0.1); color: var(--text-secondary); border-radius: 20px; padding: 6px 14px; cursor: pointer; }
                .sim-era-pill.active { border-color: var(--accent-yellow); color: var(--accent-yellow); background: rgba(245,158,11,0.08); }
                
                .sim-timeline-track { display: flex; align-items: center; margin-bottom: 25px; padding: 0 10px; }
                .sim-timeline-dot { flex-grow: 1; height: 1px; background: rgba(255,255,255,0.15); position: relative; }
                .sim-timeline-dot::after { content: ''; position: absolute; right: 0; top: 50%; transform: translate(50%, -50%); width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,0.2); cursor: pointer; }
                .sim-timeline-dot.active::after { width: 14px; height: 14px; background: var(--accent-yellow); box-shadow: 0 0 10px var(--accent-yellow); }
                
                .sim-era-card { display: flex; gap: 18px; background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 12px; padding: 20px; margin-bottom: 20px; }
                .sim-era-icon { font-size: 22px; }
                .sim-era-header { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
                .sim-era-year { font-family: 'Share Tech Mono', monospace; color: var(--accent-yellow); font-size: 12px; }
                .sim-era-name { font-family: 'Inter', sans-serif; font-weight: 600; font-size: 14px; }
                .sim-era-desc { font-size: 13px; color: var(--text-secondary); line-height: 1.6; margin-bottom: 15px; }
                .sim-era-stats { display: flex; gap: 25px; }
                .sim-era-stat-val { font-family: 'Share Tech Mono', monospace; color: var(--accent-yellow); font-size: 14px; font-weight: bold; }
                .sim-era-stat-lbl { font-size: 10px; color: var(--text-secondary); text-transform: uppercase; }
                
                .sim-nav { display: flex; justify-content: space-between; align-items: center; }
                .sim-nav-btn { font-family: 'Share Tech Mono', monospace; font-size: 12px; background: transparent; border: none; color: var(--text-secondary); cursor: pointer; }
                .sim-nav-btn:disabled { opacity: 0.3; cursor: not-allowed; }
                .sim-nav-count { font-family: 'Share Tech Mono', monospace; font-size: 12px; color: var(--text-secondary); }
                .system-credits { text-align: center; font-family: 'Share Tech Mono', monospace; font-size: 10px; color: rgba(255,255,255,0.15); margin-top: 25px; letter-spacing: 0.5px; }
            `}</style>

            <div className="sim-root">
                <header className="sim-header">
                    <div className="sim-brand">
                        <div></div>
                        <div className="sim-brand-title">Pilipinas Online</div>
                        <div className="sim-brand-sub">
                            The Birth of Philippine Internet — March 29, 1994
                        </div>
                    </div>

                    <div className="sim-status sim-online">
                        <span className="sim-status-dot"></span>
                        <span>ONLINE</span>
                    </div>
                </header>

                <div className="sim-connected-bar">
                    <div>
                        <div className="sim-connected-status">
                            <span>🇵🇭</span> CONNECTED — MARCH 29, 1994 · 01:15 AM
                        </div>
                        <div className="sim-connected-sub">
                            64 kbps leased line - PLDT Makati → Sprint San Francisco - Cisco 7000
                        </div>
                    </div>
                    <button className="sim-replay-btn" onClick={onReplay}>↻ Replay Simulation</button>
                </div>

                <div className="sim-tabs">
                    <button className="sim-tab active">TIMELINE</button>
                    <button className="sim-tab">SPEED COMPARISON</button>
                </div>

                <main>
                    <h2 className="sim-story-title">THE PHILIPPINE INTERNET STORY</h2>

                    <div className="sim-era-pills">
                        {eras.map((era, i) => (
                            <button
                                key={i}
                                className={`sim-era-pill ${i === activeEra ? "active" : ""}`}
                                onClick={() => setActiveEra(i)}
                            >
                                {era.label}
                            </button>
                        ))}
                    </div>

                    <div className="sim-timeline-track">
                        {eras.map((era, i) => (
                            <div
                                key={i}
                                className={`sim-timeline-dot ${i === activeEra ? "active" : ""}`}
                                onClick={() => setActiveEra(i)}
                            ></div>
                        ))}
                    </div>

                    <div className="sim-era-card">
                        <div className="sim-era-icon">{eras[activeEra].icon}</div>
                        <div>
                            <div className="sim-era-header">
                                <span className="sim-era-year">{eras[activeEra].year}</span>
                                <span className="sim-era-name">{eras[activeEra].name}</span>
                            </div>
                            <p className="sim-era-desc">{eras[activeEra].desc}</p>
                            <div className="sim-era-stats">
                                {eras[activeEra].stats.map((s, i) => (
                                    <div key={i} className="sim-era-stat">
                                        <div className="sim-era-stat-val">{s.val}</div>
                                        <div className="sim-era-stat-lbl">{s.lbl}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="sim-nav">
                        <button
                            className="sim-nav-btn"
                            disabled={activeEra === 0}
                            onClick={() => setActiveEra(activeEra - 1)}
                        >
                            ‹ Previous
                        </button>
                        <span className="sim-nav-count">{activeEra + 1} / {eras.length}</span>
                        <button
                            className="sim-nav-btn"
                            disabled={activeEra === eras.length - 1}
                            onClick={() => setActiveEra(activeEra + 1)}
                        >
                            Next ›
                        </button>
                    </div>
                </main>

                <footer className="system-credits">
                    Educational simulation • Based on historical records • PLDT • DOST • NTC Philippines
                </footer>
            </div>

        </>
    )

}