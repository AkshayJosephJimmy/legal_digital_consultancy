import SeriveHero from "./SeriveHero";
import ServiceCards from "./ServiceCards";
import { useState } from "react";
import ExpandedCard from "./ExpandedCard";
import ServiceModels from "./ServiceModels";

function Services() {
  const image1 = "/mediaStrategy.svg";
  const image2 = "/contentIcon.svg";
  const image3 = "/SEO.svg";
  const image4 = "/websiteIcon.svg";
  const image5 = "/designIcon.svg";
  const image6 = "/leadershipIcon.svg";
  const image7 = "/fundamental.svg";
  const image8 = "/standard.svg";
  const image9 = "/king.svg";

  const [selectedCard, setSelectedCard] = useState(null);

  const service = [
    {
      title: "Social Media Strategy & Management",
      description: "Responsible social media engagement aimed at supporting public legal awareness and professional knowledge-sharing across platforms such as LinkedIn, Instagram, X (Twitter), Facebook, and similar channels.",
      details: [
        "Strategic planning of structured, educational content calendars",
        "Professional community engagement without solicitation or inducement",
        "Ethical handling of enquiries using neutral, appointment-related language",
        "Periodic compliance and content reviews to ensure continued alignment with professional standards",
      ],
      image: image1,
    },
    {
      title: "Legal Content Creation",
      description: "Development of legally accurate, educational, and ethically responsible content designed to inform, educate, and contribute to professional discourse.",
      details: [
        "Website blogs and articles on legal concepts, statutory updates, and emerging issues",
        "Legal explainers and public awareness content simplifying complex legal topics",
        "Generalised case law and judgment analysis for academic and informational purposes",
        "Professional articles and commentary for LinkedIn and other knowledge-sharing platforms",
        "Multimedia educational content, including short videos, infographics, and presentations",
      ],
      image: image2,
    },
    {
      title: "SEO & Online Visibility",
      description: "Ethical visibility strategies to ensure accurate, accessible, and compliant online presence for law firms.",
      details: [
        "Website SEO audits and structural optimisation",
        "Practice-area topic research for educational and informational content",
        "Local SEO for accurate public information and geographic discoverability",
        "Content organisation for clarity, accessibility, and readability",
        "Ongoing monitoring for accuracy, accessibility, and compliance",
      ],
      image: image3,
    },
    {
      title: "Website Development",
      description: "Professional, responsive, and user-friendly websites that reflect your firm's expertise and values.",
      details: [
        "Custom website design aligned with professional ethos and practice areas",
        "Clear and intuitive UX/UI focused on accessibility and information flow",
        "SEO-ready architecture and analytics integration",
        "Scalable solutions ranging from informational sites to advanced platforms",
      ],
      image: image4,
    },
    {
      title: "Legal Design & Branding",
      description: "Building a consistent, professional, and recognisable identity for law firms and individual practitioners.",
      details: [
        "Logo and brand identity development",
        "Business stationery, email signatures, and digital assets",
        "Visual templates, infographics, and presentation layouts",
        "Brand guidelines to ensure consistency across all platforms",
      ],
      image: image5,
    },
    {
      title: "Thought Leadership & Industry Positioning",
      description: "Structured initiatives to position lawyers and law firms as credible voices within their practice areas.",
      details: [
        "Support for speaking engagements, webinars, podcasts, and panel discussions",
        "Research notes, whitepapers, and legal commentary",
        "Guest articles and columns in legal publications and media platforms",
        "Long-term thought leadership series to establish intellectual positioning",
      ],
      image: image6,
    },
  ];

  const models = [
    {
      title: "Foundational Model",
      description: "Core services focused on establishing a compliant and professional digital presence.",
      image: image7,
      features: [
        { name: "Social Media Strategy & Management", disabled: false },
        { name: "Legal Content Creation", disabled: false },
        { name: "SEO & Online Visibility", disabled: true },
        { name: "Website Development", disabled: true },
        { name: "Legal Design & Branding", disabled: true },
      ],
    },
    {
      title: "Standard Model",
      description: "An expanded scope supporting consistent content, visibility, and ongoing digital engagement.",
      image: image8,
      features: [
        { name: "Social Media Strategy & Management", disabled: false },
        { name: "Legal Content Creation", disabled: false },
        { name: "SEO & Online Visibility", disabled: false },
        { name: "Legal Design & Branding", disabled: false },
        { name: "Website Development", disabled: true },
        { name: "Thought Leadership & Industry Positioning", disabled: true },
      ],
    },
    {
      title: "Comprehensive Model",
      description: "End-to-end digital support covering strategy, content, visibility, branding, and thought leadership.",
      image: image9,
      features: [
        { name: "Social Media Strategy & Management", disabled: false },
        { name: "Legal Content Creation", disabled: false },
        { name: "SEO & Online Visibility", disabled: false },
        { name: "Website Development", disabled: false },
        { name: "Legal Design & Branding", disabled: false },
        { name: "Thought Leadership & Industry Positioning", disabled: false },
      ],
    },
  ];

  return (
    <>
      <SeriveHero />

      {/* Services Grid */}
      <section style={{ backgroundColor: "#faf7f2", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "4rem" }}>
            <span className="section-label" style={{ display: "block", marginBottom: "1rem" }}>What We Offer</span>
            <div className="gold-rule" style={{ marginBottom: "1.5rem" }} />
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1rem",
              fontWeight: 300,
              color: "#5a6a7a",
              maxWidth: "520px",
              lineHeight: 1.8,
            }}>
              Click any service to explore how we can support your firm's digital strategy in a compliant, ethical manner.
            </p>
          </div>

          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}>
            {service.map((item, index) => (
              <ServiceCards
                key={index}
                service={item}
                onClick={() => setSelectedCard(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedCard !== null && (
        <ExpandedCard
          service={service[selectedCard]}
          onClose={() => setSelectedCard(null)}
        />
      )}

      {/* Service Models */}
      <section style={{
        background: "linear-gradient(135deg, #0d1b2a 0%, #1a2e45 100%)",
        padding: "6rem 2rem",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "4rem", textAlign: "center" }}>
            <span className="section-label" style={{ display: "block", marginBottom: "1rem" }}>Engagement Options</span>
            <div className="gold-rule" style={{ margin: "0 auto 1.5rem" }} />
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
              fontWeight: 400,
              color: "#f5f0e8",
              marginBottom: "1.25rem",
            }}>
              Service Models
            </h2>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.95rem",
              fontWeight: 300,
              color: "#8a9aaa",
              maxWidth: "540px",
              lineHeight: 1.8,
              margin: "0 auto",
            }}>
              Our services are offered through three structured service models, designed to accommodate varying levels of digital presence and institutional requirements.
            </p>
          </div>

          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            justifyContent: "center",
          }}>
            {models.map((model, index) => (
              <ServiceModels key={index} model={model} highlighted={index === 2} />
            ))}
          </div>

          {/* Custom Model */}
          <div style={{
            marginTop: "4rem",
            position: "relative",
            overflow: "hidden",
            borderRadius: "6px",
            border: "2px solid #c9a84c",
            background: "linear-gradient(135deg, rgba(201,168,76,0.14) 0%, #0d1b2a 50%, rgba(26,46,69,0.95) 100%)",
            boxShadow: "0 0 0 1px rgba(201,168,76,0.15), 0 30px 80px rgba(0,0,0,0.5), 0 0 60px rgba(201,168,76,0.08)",
          }}>
            {/* Top gold bar — full solid */}
            <div style={{
              height: "4px",
              background: "linear-gradient(90deg, #c9a84c 0%, #e8c96a 50%, #c9a84c 100%)",
            }} />

            {/* Most Popular badge */}
            <div style={{
              position: "absolute",
              top: "1.4rem",
              right: "1.5rem",
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

            {/* Subtle corner glow */}
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "220px",
              height: "220px",
              background: "radial-gradient(circle at top left, rgba(201,168,76,0.12) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            <div style={{
              padding: "3.5rem 4rem",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "3rem",
              justifyContent: "space-between",
            }}>
              {/* Left: label + heading + body */}
              <div style={{ flex: "1 1 400px" }}>
                <span style={{
                  display: "inline-block",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#c9a84c",
                  marginBottom: "1.1rem",
                  background: "rgba(201,168,76,0.1)",
                  border: "1px solid rgba(201,168,76,0.3)",
                  padding: "0.3rem 0.9rem",
                  borderRadius: "2px",
                }}>
                  Flagship Offering
                </span>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  fontWeight: 500,
                  color: "#f5f0e8",
                  marginBottom: "1.1rem",
                  lineHeight: 1.15,
                }}>
                  Bespoke Custom Model
                </h3>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 300,
                  lineHeight: 1.9,
                  color: "#c0ccd6",
                  maxWidth: "520px",
                }}>
                  No two practices are alike. Our custom model is built entirely around your firm — selecting, combining, and calibrating services to match your specific objectives, practice areas, and compliance requirements.
                </p>
              </div>

              {/* Right: feature highlights + CTA */}
              <div style={{
                flex: "0 1 300px",
                display: "flex",
                flexDirection: "column",
                gap: "1.1rem",
              }}>
                {[
                  "Hand-picked service combination",
                  "Practice-area specific strategy",
                  "Ongoing scope adjustments",
                  "Dedicated compliance review",
                ].map((point, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.85rem" }}>
                    <span style={{ color: "#c9a84c", fontSize: "0.65rem", marginTop: "0.3rem", flexShrink: 0 }}>◆</span>
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.9rem",
                      fontWeight: 300,
                      color: "#e0dbd2",
                      lineHeight: 1.6,
                    }}>{point}</span>
                  </div>
                ))}

                <a href="/contact" style={{
                  marginTop: "1rem",
                  display: "inline-block",
                  padding: "0.9rem 2rem",
                  background: "#c9a84c",
                  color: "#0d1b2a",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  borderRadius: "3px",
                  transition: "all 0.25s ease",
                  alignSelf: "flex-start",
                  boxShadow: "0 4px 20px rgba(201,168,76,0.35)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "#d4b86a";
                  e.currentTarget.style.boxShadow = "0 6px 28px rgba(201,168,76,0.5)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "#c9a84c";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(201,168,76,0.35)";
                }}
                >
                  Discuss Your Model
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
