"use client";

export default function Nav() {
  return (
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
      <div style={{ display: "flex", alignItems: "center", gap: "1.75rem" }}>
        <a
          href="#experience"
          style={{
            color: "#555",
            fontSize: "13px",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.color = "#fff")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLElement).style.color = "#555")
          }
        >
          Experience
        </a>
        <a
          href="#projects"
          style={{
            color: "#555",
            fontSize: "13px",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.color = "#fff")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLElement).style.color = "#555")
          }
        >
          Projects
        </a>
        <a
          href="https://linkedin.com/in/john-duong-x"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#555",
            fontSize: "13px",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.color = "#fff")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLElement).style.color = "#555")
          }
        >
          LinkedIn ↗
        </a>

        {/* Scout running pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            background: "rgba(74,122,42,0.12)",
            border: "1px solid rgba(74,122,42,0.3)",
            borderRadius: "20px",
            padding: "4px 10px 4px 8px",
          }}
        >
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
          <span
            style={{
              fontFamily: "var(--font-dm-mono), 'DM Mono', monospace",
              fontSize: "11px",
              color: "#8aad5a",
              letterSpacing: "0.02em",
            }}
          >
            Scout running
          </span>
        </div>
      </div>
    </nav>
  );
}
