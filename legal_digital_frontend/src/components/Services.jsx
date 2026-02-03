
import SeriveHero from "./SeriveHero"
import ServiceCards from "./ServiceCards"
import { useState } from "react"
import ExpandedCard from "./ExpandedCard"
import image1 from "../assets/strategy_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
import image2 from "../assets/contract_edit_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
import image3 from "../assets/online_prediction_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
import image4 from "../assets/web_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
import image5 from "../assets/design_services_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
import image6 from "../assets/social_leaderboard_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
function Services(){

    const [selectedCard,setSelectedCard]=useState(null);
const service=[{
    title:"Social Media Strategy & Management",
    description:"Responsible social media engagement aimed at supporting public legal awareness and professional knowledge-sharing across platforms such as LinkedIn, Instagram, X (Twitter), Facebook, and similarchannels.",
    details:["Strategic planning of structured, educational content calendars",
        "Professional community engagement without solicitation or inducement",
        "Ethical handling of enquiries using neutral, appointment-related language",
        "Periodic compliance and content reviews to ensure continued alignment with professional standards"],
        image:image1
    


},

{
    title:"Legal Content Creation",
    description:"Development of legally accurate, educational, and ethically responsible content designed to inform,educate, and contribute to professional discourse",
     details:["Website blogs and articles on legal concepts, statutory updates, and emerging issues",
        " Legal explainers and public awareness content simplifying complex legal topics",
        "Generalised case law and judgment analysis for academic and informational purposes",
        "Professional articles and commentary for LinkedIn and other knowledge-sharing platforms",
    "Multimedia educational content, including short videos, infographics, and presentations"],
    image:image2
},
{
    title:"SEO & Online Visibility",
    description:"Ethical visibility strategies to ensure accurate, accessible, and compliant online presence for law firms.",
    details:["Website SEO audits and structural optimisation",
        "Practice-area topic research for educational and informational content",
        "Local SEO for accurate public information and geographic discoverability",
        " Content organisation for clarity, accessibility, and readability",
    "Ongoing monitoring for accuracy, accessibility, and compliance"],
    image:image3

},
{title:"Website Development",
    description:"Professional, responsive, and user-friendly websites that reflect your firm’s expertise and values",
     details:["Custom website design aligned with professional ethos and practice areas",
        "Clear and intuitive UX/UI focused on accessibility and information flow",
        "SEO-ready architecture and analytics integration",
        "Scalable solutions ranging from informational sites to advanced platforms"],
    image:image4

},
{
    title:"Legal Design & Branding",
    description:"Building a consistent, professional, and recognisable identity for law firms and individual practitioners.",
     details:["Logo and brand identity development",
        "Business stationery, email signatures, and digital assets",
        "Visual templates, infographics, and presentation layouts",
        "Brand guidelines to ensure consistency across all platforms"],
    image:image5
},
{
    title:"Thought Leadership & Industry Positioning",
    description:"Structured initiatives to position lawyers and law firms as credible voices within their practice areas.",
      details:["Support for speaking engagements, webinars, podcasts, and panel discussions",
        "Research notes, whitepapers, and legal commentary",
        "Guest articles and columns in legal publications and media platforms",
        "Long-term thought leadership series to establish intellectual positioning"],
    image:image6

}]
   




    return(
        <>
            <SeriveHero/>
            <div className="h-full flex flex-row gap-10 p-20 flex-wrap justify-center bg-gray-200">
                {service.map((item,index)=><ServiceCards key={index} service={item} onClick={()=>{setSelectedCard(index);console.log("selected card:",index)}}/>)}
                    {selectedCard !== null && (
  <ExpandedCard 
    service={service[selectedCard]} 
    onClose={() => setSelectedCard(null)} 
  />
)}
                
            </div>
            
        </>
       
    )
}
export default Services