export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "1.5rem 2.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontSize: "12px",
          color: "#333",
          fontFamily: "var(--font-dm-mono), 'DM Mono', monospace",
        }}
      >
        John Duong · Talent Engineer · Toronto · 2025
      </span>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          fontFamily: "var(--font-dm-mono), 'DM Mono', monospace",
          fontSize: "11px",
          color: "#8aad5a",
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
        Scout is running
      </div>
    </footer>
  );
}
