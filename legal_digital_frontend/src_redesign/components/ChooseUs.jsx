import ChooseCards from './ChooseCards';

function ChooseUs() {
  const features = [
    {
      title: "Legal Expertise",
      description: "All strategies and content are crafted or reviewed by practicing lawyers"
    },
    {
      title: "Compliance-First Approach",
      description: "Strict adherence to BCI Rules and professional ethics"
    },
    {
      title: "Tailored Solutions",
      description: "Services customised to your firm's objectives and practice areas"
    },
    {
      title: "Credibility-Driven Growth",
      description: "Focus on trust, visibility, and long-term positioning in the legal market"
    },
    {
      title: "Future-Ready",
      description: "Responsible use of modern digital tools and analytics"
    }
  ];

  return (
    <section style={{
      backgroundColor: "#faf7f2",
      padding: "7rem 2rem",
      borderTop: "1px solid #e8e4dd",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "4rem" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "1rem" }}>Our Advantage</span>
          <div className="gold-rule" style={{ marginBottom: "1.5rem" }} />
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.4rem, 4.5vw, 3.5rem)",
            fontWeight: 400,
            color: "#0d1b2a",
            lineHeight: 1.1,
          }}>
            Why Choose Us
          </h2>
        </div>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}>
          {features.map((feature, index) => (
            <ChooseCards key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
