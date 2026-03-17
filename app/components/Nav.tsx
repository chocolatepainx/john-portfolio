"use client";

export default function Nav() {
  return (
    <>
      <style>{`
        .nav-links {
          display: flex;
          align-items: center;
          gap: 1.75rem;
        }
        .nav-link {
          color: #555;
          font-size: 13px;
          text-decoration: none;
          transition: color 0.2s;
          min-height: 44px;
          display: inline-flex;
          align-items: center;
        }
        .nav-link:hover {
          color: #fff;
        }
        .nav-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(74,122,42,0.12);
          border: 1px solid rgba(74,122,42,0.3);
          border-radius: 20px;
          padding: 4px 10px 4px 8px;
        }
        .nav-pill-text {
          font-family: var(--font-dm-mono), 'DM Mono', monospace;
          font-size: 11px;
          color: #8aad5a;
          letter-spacing: 0.02em;
        }
        @media (max-width: 767px) {
          .nav-links-desktop {
            display: none !important;
          }
          .nav-pill-text {
            font-size: 10px;
          }
        }
      `}</style>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          height: "52px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 2.5rem",
          background: "rgba(17,17,17,0.97)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* Left: Name */}
        <span
          style={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontWeight: 700,
            fontSize: "14px",
            color: "#ffffff",
            letterSpacing: "-0.02em",
          }}
        >
          John Duong
        </span>

        {/* Right: Nav links + Scout pill */}
        <div className="nav-links">
          <div className="nav-links-desktop" style={{ display: "flex", alignItems: "center", gap: "1.75rem" }}>
            <a
              href="#experience"
              className="nav-link"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="nav-link"
            >
              Projects
            </a>
            <a
              href="https://linkedin.com/in/john-duong-x"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              LinkedIn ↗
            </a>
          </div>

          {/* Scout running pill */}
          <div className="nav-pill">
            <span
              className="animate-pulse-dot"
              style={{
                display: "inline-block",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#4a7a2a",
              }}
            />
            <span className="nav-pill-text">
              Scout running
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}
