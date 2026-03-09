function ExpandedCard({ service, onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        backgroundColor: "rgba(13,27,42,0.75)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{
        background: "#fff",
        width: "100%",
        maxWidth: "580px",
        maxHeight: "85vh",
        overflowY: "auto",
        borderRadius: "4px",
        position: "relative",
        boxShadow: "0 30px 80px rgba(13,27,42,0.4)",
        border: "1px solid #e8e4dd",
      }}>
        {/* Gold top strip */}
        <div style={{
          height: "3px",
          background: "linear-gradient(90deg, #c9a84c, #e4c87e, transparent)",
        }} />

        <div style={{ padding: "2.5rem" }}>
          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              background: "none",
              border: "1px solid #e8e4dd",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              cursor: "pointer",
              fontSize: "1rem",
              color: "#5a6a7a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              e.target.style.borderColor = "#c9a84c";
              e.target.style.color = "#c9a84c";
            }}
            onMouseLeave={e => {
              e.target.style.borderColor = "#e8e4dd";
              e.target.style.color = "#5a6a7a";
            }}
          >
            ✕
          </button>

          <span className="section-label" style={{ display: "block", marginBottom: "0.75rem" }}>Service Detail</span>
          <div className="gold-rule" style={{ marginBottom: "1.5rem" }} />

          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.9rem",
            fontWeight: 600,
            color: "#0d1b2a",
            lineHeight: 1.25,
            marginBottom: "1.25rem",
            paddingRight: "2.5rem",
          }}>
            {service.title}
          </h2>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.95rem",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "#5a6a7a",
            marginBottom: "2rem",
          }}>
            {service.description}
          </p>

          <div style={{
            borderTop: "1px solid #e8e4dd",
            paddingTop: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.85rem",
          }}>
            {service.details.map((detail, index) => (
              <div key={index} style={{ display: "flex", gap: "0.9rem", alignItems: "flex-start" }}>
                <span style={{
                  color: "#c9a84c",
                  fontSize: "0.7rem",
                  marginTop: "0.3rem",
                  flexShrink: 0,
                }}>◆</span>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: "#3d4f60",
                }}>
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpandedCard;
