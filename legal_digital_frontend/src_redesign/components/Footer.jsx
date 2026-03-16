
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{
      backgroundColor: "#080f18",
      borderTop: "1px solid rgba(201,168,76,0.15)",
      padding: "4rem 2rem 2rem",
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "3rem",
        marginBottom: "3rem",
      }}>
        {/* Brand */}
        <div style={{ gridColumn: "span 1" }}>
          <div style={{ marginBottom: "1.25rem" }}>
            <img
              src="/logo.png"
              alt="Docketo"
              style={{ height: "44px", width: "auto", filter: "brightness(0) invert(1)", marginBottom: "8px", display: "block" }}
            />
            <span style={{
              fontSize: "0.58rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#c9a84c",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
            }}>
              Legal Digital Consultancy
            </span>
          </div>
          <div style={{
            width: "40px",
            height: "1px",
            background: "#c9a84c",
            marginBottom: "1rem",
            opacity: 0.6,
          }} />
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.82rem",
            fontWeight: 300,
            color: "#6b7a8a",
            lineHeight: 1.75,
          }}>
            Delivering modern, compliant, and impactful digital solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.68rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#c9a84c",
            marginBottom: "1.5rem",
          }}>
            Quick Links
          </h3>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {["Home", "Services", "Our Team", "Contact"].map(link => (
              <li key={link}>
                <a href="#" style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 300,
                  color: "#8a9aaa",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => e.target.style.color = "#f5f0e8"}
                onMouseLeave={e => e.target.style.color = "#8a9aaa"}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.68rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#c9a84c",
            marginBottom: "1.5rem",
          }}>
            Legal
          </h3>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[{ label: "Privacy Policy", href: "privacy" }, { label: "Terms of Service", href: "terms" }, { label: "Disclaimer", href: "disclaimer" }].map((link) => (
              <li key={link}>
                <Link to={link.href} style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 300,
                  color: "#8a9aaa",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => e.target.style.color = "#f5f0e8"}
                onMouseLeave={e => e.target.style.color = "#8a9aaa"}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.68rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#c9a84c",
            marginBottom: "1.5rem",
          }}>
            Contact Us
          </h3>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              { label: "Email", value: "hello@docketo.in", href: "mailto:hello@docketo.in" },
              { label: "Phone", value: "+91 1111111111" },
              { label: "Location", value: "Kottayam, India" },
            ].map(({ label, value, href }) => (
              <li key={label} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", fontWeight: 300, color: "#8a9aaa" }}>
                <span style={{ color: "#6b7a8a" }}>{label}: </span>
                {href
                  ? <a href={href} style={{ color: "#8a9aaa", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={e => e.target.style.color = "#f5f0e8"}
                      onMouseLeave={e => e.target.style.color = "#8a9aaa"}
                    >{value}</a>
                  : value
                }
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div style={{
        borderTop: "1px solid rgba(245,240,232,0.06)",
        paddingTop: "1.75rem",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1rem",
      }}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.75rem",
          fontWeight: 300,
          color: "#4a5a6a",
        }}>
          © {new Date().getFullYear()} Docketo. All Rights Reserved.
        </p>
        <div style={{
          width: "40px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, #c9a84c)",
          opacity: 0.4,
        }} />
      </div>
    </footer>
  );
}

export default Footer;
