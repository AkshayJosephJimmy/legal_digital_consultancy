function ChooseCards({ feature, index }) {
  const icons = ["⚖", "◈", "◇", "✦", "◉"];
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e8e4dd",
        borderRadius: "4px",
        padding: "2.5rem 2rem",
        flex: "1 1 220px",
        maxWidth: "260px",
        minWidth: "200px",
        transition: "all 0.3s ease",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = "#c9a84c";
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 12px 40px rgba(13,27,42,0.08)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "#e8e4dd";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Gold top accent */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        background: "linear-gradient(90deg, #c9a84c, transparent)",
      }} />

      <div style={{
        fontSize: "1.2rem",
        color: "#c9a84c",
        marginBottom: "1.25rem",
      }}>
        {icons[index % icons.length]}
      </div>

      <h3 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "1.3rem",
        fontWeight: 600,
        color: "#0d1b2a",
        lineHeight: 1.3,
        marginBottom: "0.9rem",
      }}>
        {feature.title}
      </h3>

      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.88rem",
        fontWeight: 300,
        lineHeight: 1.75,
        color: "#5a6a7a",
      }}>
        {feature.description}
      </p>
    </div>
  );
}

export default ChooseCards;
