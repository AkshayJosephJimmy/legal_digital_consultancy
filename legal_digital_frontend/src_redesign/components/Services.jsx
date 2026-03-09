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
            marginTop: "3rem",
            background: "rgba(245,240,232,0.04)",
            border: "1px solid rgba(201,168,76,0.2)",
            borderRadius: "4px",
            padding: "2rem 2.5rem",
            maxWidth: "680px",
            margin: "3rem auto 0",
          }}>
            <h4 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.3rem",
              fontWeight: 600,
              color: "#f5f0e8",
              marginBottom: "0.75rem",
            }}>Custom Models</h4>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.9rem",
              fontWeight: 300,
              lineHeight: 1.8,
              color: "#8a9aaa",
            }}>
              In addition to these models, services may be{" "}
              <span style={{ color: "#c9a84c" }}>custom-selected</span> or{" "}
              <span style={{ color: "#c9a84c" }}>tailored</span> based on specific objectives, practice areas and compliance considerations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
