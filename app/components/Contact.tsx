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
    <>
      <style>{`
        .contact-section {
          padding: 4rem 2.5rem;
          border-top: 1px solid rgba(255,255,255,0.06);
          overflow-x: hidden;
        }
        .contact-card {
          background: #0d0d0b;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 3.5rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          max-width: 900px;
          margin: 0 auto;
        }
        .contact-cta {
          display: inline-flex;
          align-items: center;
          background: #4a7a2a;
          color: #ffffff;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.2s;
          min-height: 44px;
        }
        .contact-cta:hover {
          background: #5a8f35;
        }
        .contact-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #444;
          text-decoration: none;
          font-size: 13px;
          padding: 14px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: color 0.2s;
          min-height: 44px;
        }
        .contact-link:hover {
          color: #8aad5a;
        }
        @media (max-width: 767px) {
          .contact-section {
            padding: 2.5rem 1.25rem;
          }
          .contact-card {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            padding: 2rem 1.5rem !important;
            border-radius: 14px;
          }
        }
      `}</style>
      <section
        id="contact"
        className="contact-section"
      >
        <div className="contact-card">
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
              className="contact-cta"
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
                className="contact-link"
              >
                <span>{link.label}</span>
                <span style={{ fontSize: "12px" }}>↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
