
import { Link } from "react-router-dom";

function HomeHero() {
  const homeHeroImage = "/HomeHero.jpg";
  return (
    <div className="w-full h-150 bg-blue-500 flex items-center justify-center relative">
      <img
        src={homeHeroImage}
        alt="Home Hero"
        className="w-full h-full object-cover  object-right opacity-80"
      />
      <div className="absolute p-4">

      <p className="font-bold text-white text-3xl lg:text-6xl ">Empowering Lawyers and Law Firms to Build a Strong, Credible, and Ethical Digital Presence
      </p>
      <p className="text-white text-xl mt-3 font-semibold">BCI-compliant digital services focused on education, visibility, and professional credibility—
delivered in strict alignment with the Advocates Act, 1961 and the Bar Council of India Rules.</p>

<Link to="/services" className="bg-gray-700 w-30 p-4 mt-6 block rounded-2xl hover:bg-gray-500 font-semibold text-amber-50">Learn more</Link>
      </div>
     
    </div>
  );
}

export default HomeHero;





