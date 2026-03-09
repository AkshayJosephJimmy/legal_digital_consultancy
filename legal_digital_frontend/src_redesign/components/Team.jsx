function Team() {
  const image = "/team.svg";

  return (
    <div style={{ backgroundColor: "#faf7f2", minHeight: "100vh", paddingTop: "72px" }}>
      {/* Header Banner */}
      <div style={{
        background: "linear-gradient(135deg, #0d1b2a 0%, #1a2e45 100%)",
        padding: "4rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: "8%",
          top: "15%",
          bottom: "15%",
          width: "1px",
          background: "linear-gradient(to bottom, transparent, #c9a84c 30%, #c9a84c 70%, transparent)",
          opacity: 0.5,
        }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", paddingLeft: "4%" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "1rem" }}>The People Behind the Work</span>
          <div className="gold-rule" style={{ marginBottom: "1.5rem" }} />
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 400,
            color: "#f5f0e8",
            lineHeight: 1.1,
          }}>
            Our Team
          </h1>
        </div>
      </div>

      {/* Content */}
      <section style={{ padding: "6rem 2rem" }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "4rem",
          alignItems: "center",
        }}>
          {/* Text */}
          <div style={{ flex: "1 1 420px", display: "flex", flexDirection: "column", gap: "3.5rem" }}>
            <div>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 400,
                color: "#c9a84c",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}>
                Our Composition
              </p>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 400,
                lineHeight: 1.25,
                color: "#0d1b2a",
              }}>
                Our Team Consists of{" "}
                <em style={{ color: "#c9a84c" }}>Legal Professionals</em>,{" "}
                <em style={{ color: "#c9a84c" }}>Digital Specialists</em>{" "}
                and{" "}
                <em style={{ color: "#c9a84c" }}>Developers</em>
              </p>
            </div>

            <div style={{
              width: "100%",
              height: "1px",
              background: "linear-gradient(90deg, #c9a84c, transparent)",
              opacity: 0.4,
            }} />

            <div>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 400,
                color: "#c9a84c",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}>
                Our Mission
              </p>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                fontWeight: 400,
                lineHeight: 1.3,
                color: "#0d1b2a",
              }}>
                We work collaboratively to deliver{" "}
                <em style={{ color: "#c9a84c" }}>Ethically Compliant</em>,{" "}
                Digital Services for law firms and lawyers.
              </p>
            </div>
          </div>

          {/* Image */}
          <div style={{
            flex: "1 1 320px",
            display: "flex",
            justifyContent: "center",
          }}>
            <div style={{
              position: "relative",
              padding: "2rem",
            }}>
              {/* Decorative border */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: "20%",
                bottom: "20%",
                border: "1px solid rgba(201,168,76,0.2)",
                borderRadius: "4px",
                pointerEvents: "none",
              }} />
              <img
                src={image}
                alt="Our Team"
                style={{
                  width: "100%",
                  maxWidth: "420px",
                  objectFit: "cover",
                  position: "relative",
                  zIndex: 1,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
