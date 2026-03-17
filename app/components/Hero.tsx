"use client";

import Terminal from "./Terminal";

const STATS = [
  { number: "2019", label: "AI since" },
  { number: "100+", label: "Placements" },
  { number: "87%", label: "Offer acceptance" },
  { number: "4+", label: "Agents built" },
];

const STAT_GRID = [
  { number: "2019", label: "AI since" },
  { number: "0→1", label: "Always" },
  { number: "4+", label: "Agents built" },
  { number: "87%", label: "Offer acceptance" },
];

const FOOTER_TAGS = [
  "Python",
  "Claude Opus 4.6",
  "Pearch",
  "Slack Bolt",
  "GitHub Actions",
];

export default function Hero() {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 320px",
        minHeight: "calc(100vh - 52px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Left Column */}
      <div
        style={{
          padding: "4.5rem 2.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderRight: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Kicker */}
        <div
          className="animate-fade-up stagger-1"
          style={{
            fontFamily: "var(--font-dm-mono), 'DM Mono', monospace",
            fontSize: "11px",
            color: "#444",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "2rem",
            opacity: 0,
          }}
        >
          Talent Engineer ·{" "}
          <span style={{ color: "#8aad5a" }}>Valence · Series B</span> · Toronto
        </div>

        {/* Headline */}
        <div style={{ marginBottom: "1.75rem" }}>
          <h1
            className="animate-fade-up stagger-2"
            style={{
              fontSize: "clamp(2.6rem, 5vw, 4rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              margin: 0,
              color: "#ffffff",
              opacity: 0,
            }}
          >
            I don&apos;t just hire
          </h1>
          <h1
            className="animate-fade-up stagger-3"
            style={{
              fontSize: "clamp(2.6rem, 5vw, 4rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              margin: 0,
              color: "#4a7a2a",
              opacity: 0,
            }}
          >
            AI builders.
          </h1>
          <h1
            className="animate-fade-up stagger-4"
            style={{
              fontSize: "clamp(2.6rem, 5vw, 4rem)",
              fontWeight: 300,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              margin: 0,
              color: "#2a2a28",
              opacity: 0,
            }}
          >
            I am one.
          </h1>
        </div>

        {/* Body */}
        <p
          className="animate-fade-up stagger-5"
          style={{
            fontSize: "15px",
            color: "#555",
            maxWidth: "440px",
            lineHeight: 1.85,
            margin: "0 0 2rem 0",
            opacity: 0,
          }}
        >
          Most recruiters use AI tools. I build them. Scout — my autonomous
          sourcing agent — runs 24/7 finding engineers that matter, while I
          focus on the work that actually needs a human.
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-up stagger-6"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            marginBottom: "3rem",
            opacity: 0,
          }}
        >
          <a
            href="https://linkedin.com/in/john-duong-x"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "#4a7a2a",
              color: "#ffffff",
              padding: "10px 20px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "#5a8f35")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "#4a7a2a")
            }
          >
            View full profile →
          </a>
          <a
            href="mailto:johnle_10@hotmail.com"
            style={{
              color: "#555",
              fontSize: "14px",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "#8aad5a")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "#555")
            }
          >
            Say hello ↗
          </a>
        </div>

        {/* Proof strip */}
        <div
          className="animate-fade-up stagger-7"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: "1.5rem",
            display: "flex",
            gap: "0",
            opacity: 0,
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                paddingRight: "2rem",
                borderRight:
                  i < STATS.length - 1
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "none",
                marginRight: i < STATS.length - 1 ? "2rem" : "0",
              }}
            >
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#8aad5a",
                  letterSpacing: "-0.03em",
                }}
              >
                {stat.number}
              </span>
              <span
                style={{
                  fontSize: "11px",
                  color: "#555",
                  fontFamily: "var(--font-dm-mono), 'DM Mono', monospace",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column */}
      <div
        className="animate-slide-right"
        style={{
          padding: "2.5rem 2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          justifyContent: "center",
          background: "#0d0d0b",
          opacity: 0,
        }}
      >
        {/* Scout Card */}
        <div
          style={{
            background: "#1a1a18",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "14px",
            overflow: "hidden",
          }}
        >
          {/* Top gradient bar */}
          <div
            style={{
              height: "1px",
              background:
                "linear-gradient(to right, transparent, #4a7a2a, transparent)",
            }}
          />

          {/* Card Header */}
          <div
            style={{
              padding: "1.25rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#ffffff",
              }}
            >
              Scout
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                background: "rgba(74,122,42,0.15)",
                borderRadius: "12px",
                padding: "3px 8px",
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
                  fontSize: "11px",
                  color: "#8aad5a",
                  fontFamily: "var(--font-dm-mono), 'DM Mono', monospace",
                }}
              >
                running
              </span>
            </div>
          </div>

          {/* Terminal */}
          <div style={{ padding: "0 1.25rem" }}>
            <Terminal />
          </div>

          {/* Footer */}
          <div
            style={{
              padding: "1rem 1.25rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "0.5rem",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
              {FOOTER_TAGS.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "var(--font-dm-mono), 'DM Mono', monospace",
                    fontSize: "10px",
                    color: "#444",
                    background: "rgba(255,255,255,0.04)",
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="https://github.com/chocolatepainx"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-dm-mono), 'DM Mono', monospace",
                fontSize: "11px",
                color: "#444",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#8aad5a")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#444")
              }
            >
              github ↗
            </a>
          </div>
        </div>

        {/* 2x2 Stat Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.5rem",
          }}
        >
          {STAT_GRID.map((stat, i) => (
            <div
              key={i}
              style={{
                background: "#1a1a18",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: "10px",
                padding: "1rem",
              }}
            >
              <div
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 800,
                  color: "#ffffff",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  marginBottom: "4px",
                }}
              >
                {stat.number}
                {stat.number !== "0→1" && (
                  <span style={{ color: "#4a7a2a", fontSize: "0.8em" }}></span>
                )}
              </div>
              <div
                style={{
                  fontSize: "10px",
                  color: "#333",
                  fontFamily: "var(--font-dm-mono), 'DM Mono', monospace",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
