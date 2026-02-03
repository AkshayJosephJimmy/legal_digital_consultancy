import homeHeroImage from "/Users/akshayjosephjimmy/legal_digital_cons/legal_digital_frontend/src/assets/tingey-injury-law-firm-DZpc4UY8ZtY-unsplash.jpg"


function HomeHero() {
  return (
    <div className="w-full h-150 bg-blue-500 flex items-center justify-center relative">
      <img
        src={homeHeroImage}
        alt="Home Hero"
        className="w-full h-full object-cover  object-right opacity-80"
      />
      <div className="absolute p-4">

      <p className="text-6xl font-bold text-white">Empowering Lawyers and Law Firms to Build a Strong, Credible, and Ethical Digital Presence
      </p>
      <p className="text-white text-xl mt-3 font-semibold">BCI-compliant digital services focused on education, visibility, and professional credibility—
delivered in strict alignment with the Advocates Act, 1961 and the Bar Council of India Rules.</p>

<button className="bg-gray-700 p-4 mt-6 rounded-2xl hover:bg-gray-500 font-semibold text-amber-50">Learn more</button>
      </div>
     
    </div>
  );
}

export default HomeHero;





