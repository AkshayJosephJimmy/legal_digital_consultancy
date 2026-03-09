import ChooseUs from "./ChooseUs";
import HomeHero from "./HomeHero";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <HomeHero />

      {/* About Us */}
      <section style={{
        backgroundColor: "#faf7f2",
        padding: "7rem 2rem",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "4rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "760px" }}>
            <span className="section-label">Who We Are</span>
            <div className="gold-rule" />
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.4rem, 4.5vw, 3.5rem)",
              fontWeight: 400,
              lineHeight: 1.15,
              color: "#0d1b2a",
              marginTop: "0.5rem",
            }}>
              About Us
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
          }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1rem",
              fontWeight: 300,
              lineHeight: 1.9,
              color: "#3d4f60",
            }}>
              We support law firms and lawyers through <strong style={{ color: "#0d1b2a", fontWeight: 600 }}>BCI-compliant</strong> digital services that focus on education, visibility, and professional credibility.
            </p>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1rem",
              fontWeight: 300,
              lineHeight: 1.9,
              color: "#3d4f60",
            }}>
              Our work includes responsible content creation, social media management, website development, search visibility, legal design & branding, and thought-leadership initiatives—all designed to improve access to legal information while strictly adhering to the <strong style={{ color: "#0d1b2a", fontWeight: 600 }}>Advocates Act, 1961 and the Bar Council of India Rules.</strong>
            </p>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1rem",
              fontWeight: 300,
              lineHeight: 1.9,
              color: "#3d4f60",
            }}>
              We take a compliance-first approach, prioritising ethical communication, public legal awareness, and long-term institutional trust over promotional or solicitatory practices. By combining legal expertise with digital strategy, we help law firms and individual practitioners establish a professional presence that reflects their values and expertise in a responsible and credible manner.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{
        background: "linear-gradient(135deg, #0d1b2a 0%, #1a2e45 100%)",
        padding: "5rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Decorative element */}
        <div style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "40%",
          background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.04))",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute",
          left: "5%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.06), transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}>
          <span className="section-label" style={{ display: "block", marginBottom: "1.5rem" }}>Our Services</span>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            fontWeight: 400,
            color: "#f5f0e8",
            lineHeight: 1.4,
            marginBottom: "2.5rem",
          }}>
            Check out our services to see how we can help your firm build a{" "}
            <em style={{ color: "#c9a84c" }}>strong, ethical digital presence</em>
          </p>
          <Link
            to="/services"
            style={{
              display: "inline-block",
              padding: "0.85rem 2.75rem",
              border: "1px solid #c9a84c",
              color: "#c9a84c",
              textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              borderRadius: "3px",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={e => {
              e.target.style.backgroundColor = "#c9a84c";
              e.target.style.color = "#0d1b2a";
            }}
            onMouseLeave={e => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#c9a84c";
            }}
          >
            View All Services
          </Link>
        </div>
      </section>

      <ChooseUs />
    </>
  );
}

export default Home;
