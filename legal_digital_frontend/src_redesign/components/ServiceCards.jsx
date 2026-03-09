function ServiceCards({ service, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: "#fff",
        border: "1px solid #e8e4dd",
        borderRadius: "4px",
        padding: "2.5rem 2rem",
        width: "clamp(280px, 30%, 360px)",
        cursor: "pointer",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = "#c9a84c";
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 16px 48px rgba(13,27,42,0.1)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "#e8e4dd";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Gold left accent */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "3px",
        bottom: 0,
        background: "linear-gradient(to bottom, #c9a84c, transparent)",
        opacity: 0,
        transition: "opacity 0.3s",
      }} className="card-accent" />

      {/* Icon */}
      <div style={{
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        border: "1px solid #e8e4dd",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#faf7f2",
      }}>
        <img
          src={service.image}
          alt={service.title}
          style={{ width: "24px", height: "24px", objectFit: "contain" }}
        />
      </div>

      <h3 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "1.3rem",
        fontWeight: 600,
        color: "#0d1b2a",
        lineHeight: 1.3,
      }}>
        {service.title}
      </h3>

      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.875rem",
        fontWeight: 300,
        lineHeight: 1.75,
        color: "#5a6a7a",
        flexGrow: 1,
      }}>
        {service.description.length > 140 ? service.description.slice(0, 140) + "..." : service.description}
      </p>

      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        color: "#c9a84c",
        fontSize: "0.78rem",
        fontWeight: 500,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        fontFamily: "'DM Sans', sans-serif",
        marginTop: "0.5rem",
      }}>
        <span>Learn more</span>
        <span>→</span>
      </div>
    </div>
  );
}

export default ServiceCards;
