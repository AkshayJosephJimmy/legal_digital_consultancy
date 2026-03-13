function Disclaimer() {
  const points = [
    "The information, content, and materials created or published through our services are intended solely for informational and branding purposes. They do not constitute legal advice and should not be relied upon as a substitute for professional legal consultation.",
    "While reasonable care is taken to ensure accuracy and quality in all content, we make no representations or warranties regarding the completeness, reliability, or suitability of any information produced or published through our services.",
    "Our services focus on digital branding, content development, and media visibility for legal professionals. We do not guarantee specific results such as search engine rankings, audience growth, client acquisition, or media publication outcomes.",
    "Any reliance placed on the content produced or disseminated through our services is strictly at the user's or client's own discretion and risk.",
    "We are not responsible for the policies, practices, or content of third-party platforms, websites, or media outlets where client materials may be published or featured.",
  ];

  return (
    <div
      style={{
        backgroundColor: "#faf7f2",
        minHeight: "100vh",
        padding: "5rem 2rem",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "4rem" }}>
          <span
            style={{
              display: "block",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#c9a84c",
              marginBottom: "1rem",
            }}
          >
            Legal &amp; Compliance
          </span>
          <div
            style={{
              width: "60px",
              height: "2px",
              background: "#c9a84c",
              marginBottom: "1.75rem",
            }}
          />
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
              fontWeight: 400,
              color: "#0d1b2a",
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            Disclaimer
          </h1>
        </div>

        {/* Main card — dark navy, same as the CTA/banner blocks in the site */}
        <div
          style={{
            background: "linear-gradient(135deg, #0d1b2a 0%, #1a2e45 100%)",
            borderRadius: "4px",
            padding: "3rem",
            position: "relative",
            overflow: "hidden",
            marginBottom: "2rem",
          }}
        >
          {/* Decorative radial glow */}
          <div
            style={{
              position: "absolute",
              top: "-60px",
              right: "-60px",
              width: "220px",
              height: "220px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(201,168,76,0.07), transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* Gold top accent */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background: "linear-gradient(90deg, #c9a84c, #e4c87e, transparent)",
            }}
          />

          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.25rem",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#c9a84c",
              lineHeight: 1.5,
              marginBottom: "2.5rem",
              position: "relative",
              zIndex: 1,
            }}
          >
            "Content created through our services is for informational and
            branding purposes only — not legal advice."
          </p>

          {/* Points list */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.75rem",
              position: "relative",
              zIndex: 1,
            }}
          >
            {points.map((point, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  alignItems: "flex-start",
                }}
              >
                {/* Gold bullet */}
                <div
                  style={{
                    flexShrink: 0,
                    marginTop: "6px",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#c9a84c",
                    boxShadow: "0 0 6px rgba(201,168,76,0.5)",
                  }}
                />
                <p
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 300,
                    lineHeight: 1.85,
                    color: "#b0a898",
                  }}
                >
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact note */}
        <div
          style={{
            padding: "1.5rem 2rem",
            border: "1px solid #e8e4dd",
            borderRadius: "4px",
            display: "flex",
            alignItems: "flex-start",
            gap: "1rem",
          }}
        >
          <span
            style={{
              color: "#c9a84c",
              fontSize: "0.8rem",
              marginTop: "2px",
              flexShrink: 0,
            }}
          >
            ◆
          </span>
          <p
            style={{
              fontSize: "0.82rem",
              fontWeight: 300,
              lineHeight: 1.75,
              color: "#6b7a8a",
            }}
          >
            For any enquiries related to this disclaimer or our services, please
            contact{" "}
            <a
              href="mailto:hello@docketo.in"
              style={{
                color: "#c9a84c",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              hello@docketo.in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Disclaimer;
