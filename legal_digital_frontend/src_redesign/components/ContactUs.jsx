import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function ContactUs() {
  return (
    <div style={{
      minHeight: "100vh",
      paddingTop: "72px",
      backgroundColor: "#0d1b2a",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background texture */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "radial-gradient(circle at 20% 50%, rgba(201,168,76,0.04) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(201,168,76,0.03) 0%, transparent 50%)",
        pointerEvents: "none",
      }} />

      {/* Vertical gold line */}
      <div style={{
        position: "absolute",
        left: "8%",
        top: "10%",
        bottom: "10%",
        width: "1px",
        background: "linear-gradient(to bottom, transparent, rgba(201,168,76,0.4) 30%, rgba(201,168,76,0.4) 70%, transparent)",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "5rem 2rem 5rem 10%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "5rem",
        alignItems: "center",
        minHeight: "calc(100vh - 72px)",
        position: "relative",
        zIndex: 1,
      }}>
        {/* Left: Message */}
        <div style={{ flex: "1 1 400px" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "1.25rem" }}>Get in Touch</span>
          <div className="gold-rule" style={{ marginBottom: "2rem" }} />

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1rem",
            fontWeight: 300,
            color: "#8a9aaa",
            marginBottom: "1.25rem",
            lineHeight: 1.8,
          }}>
            Contact Us if you are a law firm or an individual practitioner looking to build
          </p>

          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: 400,
            lineHeight: 1.12,
            color: "#f5f0e8",
          }}>
            A{" "}
            <em style={{ color: "#c9a84c" }}>Strong</em>,{" "}
            <em style={{ color: "#c9a84c" }}>Ethical</em>,{" "}
            <span style={{ display: "block" }}>Digital Presence.</span>
          </h2>
        </div>

        {/* Right: Contact card */}
        <div style={{
          flex: "0 1 380px",
          background: "rgba(245,240,232,0.04)",
          border: "1px solid rgba(201,168,76,0.2)",
          borderRadius: "4px",
          padding: "3rem",
          position: "relative",
        }}>
          {/* Gold top accent */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(90deg, #c9a84c, transparent)",
          }} />

          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.6rem",
            fontWeight: 500,
            color: "#f5f0e8",
            marginBottom: "2rem",
          }}>
            Reach Out to Us
          </h3>

          <div style={{
            marginBottom: "2.5rem",
            paddingBottom: "2.5rem",
            borderBottom: "1px solid rgba(245,240,232,0.08)",
          }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#c9a84c",
              marginBottom: "0.75rem",
            }}>
              Email
            </p>
            <a
              href="mailto:akshayjosephjimmy05@gmail.com"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                fontWeight: 300,
                color: "#d4cfc8",
                textDecoration: "none",
                transition: "color 0.2s",
                display: "block",
              }}
              onMouseEnter={e => e.target.style.color = "#c9a84c"}
              onMouseLeave={e => e.target.style.color = "#d4cfc8"}
            >
              companyEmail
            </a>
          </div>

          <div>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#c9a84c",
              marginBottom: "1.25rem",
            }}>
              Follow Us
            </p>
            <div style={{ display: "flex", gap: "1.25rem" }}>
              {[
                { Icon: FaFacebook, label: "Facebook" },
                { Icon: FaSquareInstagram, label: "Instagram" },
                { Icon: FaLinkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  title={label}
                  style={{
                    background: "none",
                    border: "1px solid rgba(201,168,76,0.25)",
                    borderRadius: "50%",
                    width: "44px",
                    height: "44px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "#8a9aaa",
                    fontSize: "1.15rem",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "#c9a84c";
                    e.currentTarget.style.color = "#c9a84c";
                    e.currentTarget.style.background = "rgba(201,168,76,0.08)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)";
                    e.currentTarget.style.color = "#8a9aaa";
                    e.currentTarget.style.background = "none";
                  }}
                >
                  <Icon />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
