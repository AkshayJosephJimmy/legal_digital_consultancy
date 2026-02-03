import React from 'react';
import ChooseCards from './ChooseCards';




function ChooseUs() {

    const features=[{
        title:"Legal Expertise",
        description:"All strategies and content are crafted or reviewed by practicing lawyers"
    
    },
    {
        title:"Compliance-First Approach",
        description:"Strict adherence to BCI Rules and professional ethics"


    },
    {
        title:"Tailored Solutions",
        description:" Services customised to your firm’s objectives and practice areas"
    },
    {
        title:"Credibility-Driven Growth",
        description:" Focus on trust, visibility, and long-term positioning in the legal market"
    },
    {
        title:"Future-Ready",
        description:" Responsible use of modern digital tools and analytics"
    }]

    
  return (
    <div className="choose-us-container">
      <h2 className="text-black text-6xl text-center font-extrabold my-30">Why Choose Us</h2>
      <div className="flex gap-20 flex-wrap flex-col items-center lg:flex-row ">
        {features.map((feature,index)=>(
            <ChooseCards key={index} feature={feature}/>
        ))}
        
      </div>
    </div>
  );
}
export default ChooseUs;