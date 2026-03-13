import { Link } from "react-router-dom";

function HomeHero() {
  return (
    <div style={{
      width: "100%",
      
      minHeight: "100vh",
      marginTop: 0,
      paddingTop: "72px",
      position: "relative",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      backgroundColor: "#0d1b2a",
    }}>
      {/* Background Image */}
      <img
        src="https://res.cloudinary.com/dkzuyavta/image/upload/f_auto,q_auto:good,w_1600,fl_progressive/v1771658935/HomeHero_gjhanp.jpg"
        alt="Home Hero"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "right center",
          opacity: 0.18,
        }}
      />

      {/* Gradient overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(105deg, rgba(13,27,42,0.98) 45%, rgba(13,27,42,0.55) 100%)",
      }} />

      {/* Gold vertical accent line */}
      <div style={{
        position: "absolute",
        left: "8%",
        top: "20%",
        bottom: "20%",
        width: "1px",
        background: "linear-gradient(to bottom, transparent, #c9a84c 30%, #c9a84c 70%, transparent)",
        opacity: 0.5,
      }} />

      {/* Content */}
      <div style={{
        position: "relative",
        zIndex: 2,
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "4rem 2rem 4rem 10%",
        width: "100%",
      }}>
        <div className="fade-up" style={{ marginBottom: "2.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
            <img
              src="/logo.png"
              alt="Docketo"
              style={{
                height: "44px",
                width: "auto",
                filter: "brightness(0) invert(1)",
                opacity: 0.95,
              }}
            />
            <div style={{
              width: "1px",
              height: "36px",
              background: "linear-gradient(to bottom, transparent, #c9a84c, transparent)",
              opacity: 0.6,
            }} />
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.62rem",
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "#c9a84c",
              fontWeight: 500,
              lineHeight: 1.6,
            }}>
              Legal Digital<br />Consultancy
            </span>
          </div>
        </div>

        <h1 className="fade-up-delay-1" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2.8rem, 6vw, 5rem)",
          fontWeight: 400,
          lineHeight: 1.12,
          color: "#f5f0e8",
          maxWidth: "800px",
          letterSpacing: "-0.01em",
          marginBottom: "2rem",
          fontStyle: "normal",
          zIndex: 10,
        }}>
          Empowering Lawyers and Law Firms to Build a Strong, Credible, and{" "}
          <em style={{ color: "#c9a84c", fontStyle: "italic" }}>Ethical</em> Digital Presence
        </h1>

        <div className="gold-rule fade-up-delay-2" style={{ margin: "2rem 0" }} />

        <p className="fade-up-delay-2" style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
          fontWeight: 300,
          lineHeight: 1.8,
          color: "#b0a898",
          maxWidth: "580px",
          marginBottom: "3rem",
        }}>
          BCI-compliant digital services focused on education, visibility, and professional credibility—delivered in strict alignment with the Advocates Act, 1961 and the Bar Council of India Rules.
        </p>

        <div className="fade-up-delay-3" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link
            to="/services"
            style={{
              display: "inline-block",
              padding: "0.85rem 2.5rem",
              backgroundColor: "#c9a84c",
              color: "#0d1b2a",
              textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              borderRadius: "3px",
              transition: "all 0.25s ease",
              border: "1px solid #c9a84c",
            }}
            onMouseEnter={e => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#c9a84c";
            }}
            onMouseLeave={e => {
              e.target.style.backgroundColor = "#c9a84c";
              e.target.style.color = "#0d1b2a";
            }}
          >
            Explore Services
          </Link>

          <Link
            to="/contact"
            style={{
              display: "inline-block",
              padding: "0.85rem 2.5rem",
              backgroundColor: "transparent",
              color: "#f5f0e8",
              textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              borderRadius: "3px",
              transition: "all 0.25s ease",
              border: "1px solid rgba(245,240,232,0.25)",
            }}
            onMouseEnter={e => {
              e.target.style.borderColor = "rgba(245,240,232,0.6)";
              e.target.style.color = "#fff";
            }}
            onMouseLeave={e => {
              e.target.style.borderColor = "rgba(245,240,232,0.25)";
              e.target.style.color = "#f5f0e8";
            }}
          >
            Contact Us
          </Link>
        </div>

        {/* Scroll indicator */}
        <div style={{
          marginTop: "5rem",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
        }}>
          <div style={{
            width: "30px",
            height: "1px",
            backgroundColor: "#c9a84c",
            opacity: 0.6,
          }} />
          <span style={{
            fontSize: "0.65rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#6b7a8a",
            fontFamily: "'DM Sans', sans-serif",
          }}>Scroll to explore</span>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
