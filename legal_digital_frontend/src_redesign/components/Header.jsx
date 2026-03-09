import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import useScreenWidth from "../hooks/useScreenWidth";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [clicked, setClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const width = useScreenWidth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/team", label: "Our Team" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "all 0.3s ease",
          backgroundColor: scrolled ? "rgba(13, 27, 42, 0.97)" : "rgba(13, 27, 42, 0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid rgba(201, 168, 76, 0.25)" : "1px solid rgba(201, 168, 76, 0.1)",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
        }}
      >
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.4rem",
                fontWeight: 600,
                color: "#f5f0e8",
                letterSpacing: "0.04em",
              }}>Company Name</span>
              <span style={{
                fontSize: "0.6rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#c9a84c",
                marginTop: "2px",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
              }}>Legal Digital Consultancy</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          {width >= 500 && (
            <nav>
              <ul style={{ display: "flex", alignItems: "center", gap: "0.25rem", listStyle: "none" }}>
                {navLinks.map(({ to, label }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.82rem",
                        fontWeight: 500,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        padding: "0.5rem 1rem",
                        borderRadius: "4px",
                        transition: "all 0.2s ease",
                        color: isActive(to) ? "#c9a84c" : "#c8c0b4",
                        borderBottom: isActive(to) ? "1px solid #c9a84c" : "1px solid transparent",
                      }}
                      onMouseEnter={e => { if (!isActive(to)) e.target.style.color = "#f5f0e8"; }}
                      onMouseLeave={e => { if (!isActive(to)) e.target.style.color = "#c8c0b4"; }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/contact"
                    style={{
                      marginLeft: "0.75rem",
                      padding: "0.5rem 1.25rem",
                      background: "transparent",
                      border: "1px solid #c9a84c",
                      borderRadius: "3px",
                      color: "#c9a84c",
                      fontSize: "0.78rem",
                      fontWeight: 500,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      transition: "all 0.25s ease",
                      fontFamily: "'DM Sans', sans-serif",
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
                    Get in Touch
                  </Link>
                </li>
              </ul>
            </nav>
          )}

          {/* Mobile hamburger */}
          {width < 500 && (
            <button
              onClick={() => setClicked(!clicked)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#f5f0e8",
                fontSize: "1.5rem",
                padding: "0.5rem",
              }}
            >
              {clicked ? <IoCloseOutline /> : <RxHamburgerMenu />}
            </button>
          )}
        </div>
      </header>

      {/* Mobile Menu */}
      {width < 500 && clicked && (
        <div style={{
          position: "fixed",
          top: "72px",
          left: 0,
          right: 0,
          zIndex: 99,
          backgroundColor: "rgba(13, 27, 42, 0.98)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(201, 168, 76, 0.2)",
          padding: "1.5rem 2rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
        }}>
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setClicked(false)}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 400,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "0.9rem 0",
                borderBottom: "1px solid rgba(201, 168, 76, 0.1)",
                color: isActive(to) ? "#c9a84c" : "#c8c0b4",
                transition: "color 0.2s",
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default Header;
