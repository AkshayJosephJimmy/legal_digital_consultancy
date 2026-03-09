function SeriveHero() {
  return (
    <div style={{
      position: "relative",
      height: "380px",
      marginTop: "72px",
      overflow: "hidden",
      backgroundColor: "#0d1b2a",
    }}>
      <img
        src="https://ik.imagekit.io/ylq75x7e0//serviceHero.jpg?tr=f-auto,q-100,w-1600"
        alt="Services"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.2,
        }}
      />
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(105deg, rgba(13,27,42,0.95) 40%, rgba(13,27,42,0.5))",
      }} />

      {/* Vertical gold line */}
      <div style={{
        position: "absolute",
        left: "8%",
        top: "15%",
        bottom: "15%",
        width: "1px",
        background: "linear-gradient(to bottom, transparent, #c9a84c 30%, #c9a84c 70%, transparent)",
        opacity: 0.5,
      }} />

      <div style={{
        position: "absolute",
        bottom: "3rem",
        left: "10%",
        zIndex: 2,
      }}>
        <span className="section-label" style={{ display: "block", marginBottom: "1rem" }}>What We Offer</span>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(3rem, 7vw, 5.5rem)",
          fontWeight: 400,
          color: "#f5f0e8",
          letterSpacing: "0.02em",
          lineHeight: 1,
        }}>
          Services
        </h1>
      </div>
    </div>
  );
}

export default SeriveHero;
