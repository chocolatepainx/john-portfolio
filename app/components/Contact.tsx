"use client";

const LINKS = [
  {
    label: "linkedin.com/in/john-duong-x",
    href: "https://linkedin.com/in/john-duong-x",
  },
  {
    label: "github.com/chocolatepainx",
    href: "https://github.com/chocolatepainx",
  },
  {
    label: "johnle_10@hotmail.com",
    href: "mailto:johnle_10@hotmail.com",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "4rem 2.5rem",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          background: "#0d0d0b",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "20px",
          padding: "3.5rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* Left */}
        <div>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              margin: "0 0 1rem 0",
              lineHeight: 1.1,
              color: "#ffffff",
            }}
          >
            Let&apos;s build{" "}
            <span style={{ color: "#8aad5a" }}>something.</span>
          </h2>
          <p
            style={{
              fontSize: "13px",
              color: "#555",
              lineHeight: 1.75,
              margin: "0 0 1.75rem 0",
            }}
          >
            Always building, always recruiting. Open for conversations about
            AI-native talent infrastructure, autonomous sourcing, or just
            talking agents. DMs always open.
          </p>
          <a
            href="mailto:johnle_10@hotmail.com"
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
            Say hello →
          </a>
        </div>

        {/* Right: Links */}
        <div>
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "#444",
                textDecoration: "none",
                fontSize: "13px",
                padding: "14px 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#8aad5a")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#444")
              }
            >
              <span>{link.label}</span>
              <span style={{ fontSize: "12px" }}>↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
