function TermsOfService() {
  const terms = [
    {
      number: "01",
      title: "Scope of Services",
      content:
        "We provide services including website creation and maintenance, branding and design, blog setup, LinkedIn profile management, content creation, search engine optimisation structuring, article writing, podcast facilitation, and media outreach. The exact scope of work will be defined through separate agreements, proposals, or service plans.",
    },
    {
      number: "02",
      title: "Client Responsibilities",
      content:
        "Clients are responsible for providing accurate information, timely approvals, and all necessary materials required for the execution of services. Any delays in providing required inputs may affect timelines.",
    },
    {
      number: "03",
      title: "Content and Materials",
      content:
        "Clients must ensure that all information, materials, and content provided to us do not infringe any intellectual property rights or violate applicable laws. We reserve the right to refuse to publish or promote any material that is unlawful, misleading, or inappropriate.",
    },
    {
      number: "04",
      title: "Intellectual Property",
      content:
        "All original materials created as part of the services, including designs and written content, will be transferred to the client upon completion of the project and settlement of all applicable fees, unless otherwise agreed.",
    },
    {
      number: "05",
      title: "Third-Party Platforms",
      content:
        "Certain services may involve third-party platforms such as hosting providers, social media networks, podcast platforms, or media publications. Their use will be subject to the respective terms and policies of those platforms.",
    },
    {
      number: "06",
      title: "Limitation of Liability",
      content:
        "While we strive to provide high-quality services, we do not guarantee specific outcomes such as search rankings, audience growth, or media placements. We shall not be liable for indirect or consequential losses arising from the use of our services.",
    },
    {
      number: "07",
      title: "Termination",
      content:
        "Either party may terminate the engagement in accordance with the agreed service terms. Fees for services already performed shall remain payable.",
    },
    {
      number: "08",
      title: "Modifications",
      content:
        "These Terms of Service may be updated periodically. Continued use of our services constitutes acceptance of any revised terms.",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#faf7f2",
        minHeight: "100vh",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Hero banner */}
      <div
        style={{
          background: "linear-gradient(135deg, #0d1b2a 0%, #1a2e45 100%)",
          padding: "5rem 2rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative vertical line */}
        <div
          style={{
            position: "absolute",
            left: "8%",
            top: "10%",
            bottom: "10%",
            width: "1px",
            background:
              "linear-gradient(to bottom, transparent, rgba(201,168,76,0.5) 30%, rgba(201,168,76,0.5) 70%, transparent)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "40%",
            background:
              "linear-gradient(90deg, transparent, rgba(201,168,76,0.03))",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            paddingLeft: "clamp(0px, 6%, 80px)",
            position: "relative",
            zIndex: 1,
          }}
        >
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
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              fontWeight: 400,
              color: "#f5f0e8",
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            Terms of Service
          </h1>
          <p
            style={{
              fontSize: "0.9rem",
              fontWeight: 300,
              lineHeight: 1.85,
              color: "#8a9aaa",
              maxWidth: "520px",
            }}
          >
            Please read these terms carefully before engaging with our services.
            By proceeding, you agree to be bound by the conditions outlined
            below.
          </p>
        </div>
      </div>

      {/* Terms list */}
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "4rem 2rem 5rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "0",
          }}
        >
          {terms.map((term, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                gap: "2rem",
                padding: "2.5rem 0",
                borderBottom:
                  index < terms.length - 1 ? "1px solid #e8e4dd" : "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(90deg, rgba(201,168,76,0.03), transparent)";
                e.currentTarget.style.marginLeft = "-1rem";
                e.currentTarget.style.paddingLeft = "1rem";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.marginLeft = "0";
                e.currentTarget.style.paddingLeft = "0";
              }}
            >
              {/* Number */}
              <div style={{ flexShrink: 0, paddingTop: "4px" }}>
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "2rem",
                    fontWeight: 300,
                    color: "rgba(201,168,76,0.3)",
                    lineHeight: 1,
                    display: "block",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {term.number}
                </span>
              </div>

              {/* Content */}
              <div>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: "#0d1b2a",
                    marginBottom: "0.75rem",
                    lineHeight: 1.3,
                  }}
                >
                  {term.title}
                </h2>
                <p
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 300,
                    lineHeight: 1.85,
                    color: "#4a5a6a",
                  }}
                >
                  {term.content}
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
            border: "1px solid #e8e4dd",
            borderRadius: "4px",
            display: "flex",
            alignItems: "flex-start",
            gap: "1rem",
          }}
        >
          <span style={{ color: "#c9a84c", fontSize: "0.8rem", marginTop: "2px", flexShrink: 0 }}>◆</span>
          <p
            style={{
              fontSize: "0.82rem",
              fontWeight: 300,
              lineHeight: 1.75,
              color: "#6b7a8a",
            }}
          >
            For any questions regarding these terms, please contact us at{" "}
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

export default TermsOfService;
