function ServiceModels({ model, highlighted }) {
  return (
    <div style={{
      background: highlighted ? "#0d1b2a" : "#fff",
      border: highlighted ? "1px solid #c9a84c" : "1px solid #e8e4dd",
      borderRadius: "4px",
      padding: "2.5rem",
      width: "clamp(260px, 30%, 320px)",
      position: "relative",
      overflow: "hidden",
      transition: "all 0.3s ease",
      boxShadow: highlighted ? "0 20px 60px rgba(13,27,42,0.2)" : "none",
    }}
    onMouseEnter={e => {
      if (!highlighted) {
        e.currentTarget.style.borderColor = "#c9a84c";
        e.currentTarget.style.boxShadow = "0 12px 40px rgba(13,27,42,0.08)";
      }
    }}
    onMouseLeave={e => {
      if (!highlighted) {
        e.currentTarget.style.borderColor = "#e8e4dd";
        e.currentTarget.style.boxShadow = "none";
      }
    }}
    >
      {highlighted && (
        <div style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          background: "#c9a84c",
          color: "#0d1b2a",
          fontSize: "0.6rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          padding: "0.3rem 0.75rem",
          borderRadius: "2px",
          fontFamily: "'DM Sans', sans-serif",
        }}>
          Most Popular
        </div>
      )}

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
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        border: `1px solid ${highlighted ? "rgba(201,168,76,0.4)" : "#e8e4dd"}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: highlighted ? "rgba(201,168,76,0.1)" : "#faf7f2",
        marginBottom: "1.25rem",
      }}>
        <img src={model.image} alt={model.title} style={{ width: "22px", height: "22px" }} />
      </div>

      <h3 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "1.4rem",
        fontWeight: 600,
        color: highlighted ? "#f5f0e8" : "#0d1b2a",
        marginBottom: "0.75rem",
      }}>
        {model.title}
      </h3>

      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.85rem",
        fontWeight: 300,
        lineHeight: 1.7,
        color: highlighted ? "#b0a898" : "#5a6a7a",
        marginBottom: "1.75rem",
        paddingBottom: "1.75rem",
        borderBottom: `1px solid ${highlighted ? "rgba(245,240,232,0.1)" : "#f0ece6"}`,
      }}>
        {model.description}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
        {model.features.map((feature, index) => (
          <div key={index} style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            opacity: feature.disabled ? 0.35 : 1,
          }}>
            <span style={{
              color: feature.disabled ? "#9aa3ad" : "#c9a84c",
              fontSize: "0.65rem",
              flexShrink: 0,
            }}>
              {feature.disabled ? "○" : "◆"}
            </span>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.85rem",
              fontWeight: 300,
              color: highlighted
                ? (feature.disabled ? "#6b7a8a" : "#d4cfc8")
                : (feature.disabled ? "#a0aab4" : "#3d4f60"),
              textDecoration: feature.disabled ? "line-through" : "none",
            }}>
              {feature.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceModels;
