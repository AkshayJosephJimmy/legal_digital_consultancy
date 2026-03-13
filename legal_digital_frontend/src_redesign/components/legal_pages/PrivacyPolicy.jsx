function PrivacyPolicy() {
  const sections = [
    {
      title: "Information We Collect",
      content:
        "We may collect limited personal and professional information such as name, contact details, law firm details, professional profiles, and materials provided for website development, branding, content creation, or digital marketing. Basic technical data such as website usage information may also be collected for analytics purposes.",
    },
    {
      title: "Use of Information",
      content:
        "The information collected is used solely for the purpose of delivering our services, including website creation and maintenance, branding and design, LinkedIn profile management, content development, search engine optimisation, media outreach, and related digital marketing activities.",
    },
    {
      title: "Content Ownership",
      content:
        "All materials, documents, and information provided by clients remain their property and are used only for the purpose of executing the agreed services unless otherwise authorised.",
    },
    {
      title: "Information Sharing",
      content:
        "We do not sell, rent, or trade personal information. Information may be shared only with trusted third-party service providers necessary for delivering services, or where required by law.",
    },
    {
      title: "Data Security",
      content:
        "Appropriate technical and organisational measures are adopted to safeguard information from unauthorised access, disclosure, or misuse.",
    },
    {
      title: "Third-Party Platforms",
      content:
        "Our services may involve the use of third-party platforms such as hosting services, professional networks, or publishing platforms, which operate under their own privacy policies.",
    },
    {
      title: "Policy Updates",
      content:
        "This Privacy Policy may be revised from time to time. Any updates will take effect upon publication on this website. Continued use of our services indicates acceptance of the updated policy.",
    },
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
        <div style={{ marginBottom: "3.5rem" }}>
          <span
            style={{
              display: "block",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#c9a84c",
              marginBottom: "1rem",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Legal &amp; Compliance
          </span>
          <div
            style={{
              width: "60px",
              height: "2px",
              background: "#c9a84c",
              marginBottom: "1.5rem",
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
            Privacy Policy
          </h1>
          <p
            style={{
              fontSize: "0.95rem",
              fontWeight: 300,
              lineHeight: 1.85,
              color: "#5a6a7a",
              maxWidth: "580px",
            }}
          >
            We are committed to protecting the privacy and confidentiality of
            all information shared with us in the course of providing our
            services.
          </p>
        </div>

        {/* Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {sections.map((section, index) => (
            <div
              key={index}
              style={{
                display: "grid",
                gridTemplateColumns: "24px 1fr",
                gap: "0 1.75rem",
                paddingBottom: "2.25rem",
                marginBottom: "2.25rem",
                borderBottom:
                  index < sections.length - 1
                    ? "1px solid #e8e4dd"
                    : "none",
              }}
            >
              {/* Number + vertical line */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 0,
                }}
              >
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    backgroundColor: "#0d1b2a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      color: "#c9a84c",
                      fontSize: "0.6rem",
                      fontWeight: 700,
                    }}
                  >
                    {index + 1}
                  </span>
                </div>
                {index < sections.length - 1 && (
                  <div
                    style={{
                      width: "1px",
                      flexGrow: 1,
                      marginTop: "6px",
                      background:
                        "linear-gradient(to bottom, rgba(201,168,76,0.3), transparent)",
                    }}
                  />
                )}
              </div>

              {/* Text */}
              <div style={{ paddingTop: "2px" }}>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "#0d1b2a",
                    marginBottom: "0.75rem",
                    lineHeight: 1.3,
                  }}
                >
                  {section.title}
                </h2>
                <p
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 300,
                    lineHeight: 1.85,
                    color: "#4a5a6a",
                  }}
                >
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div
          style={{
            marginTop: "3rem",
            padding: "1.5rem 2rem",
            background: "#0d1b2a",
            borderRadius: "4px",
            borderLeft: "3px solid #c9a84c",
          }}
        >
          <p
            style={{
              fontSize: "0.82rem",
              fontWeight: 300,
              lineHeight: 1.75,
              color: "#b0a898",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            For any privacy-related queries, please reach out to us at{" "}
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

export default PrivacyPolicy;
