import ChooseUs from "./ChooseUs"
import HomeHero from "./HomeHero"
import { Link } from "react-router-dom"





function Home(){



    return(
        
        <>
         <HomeHero/>
         <div className=" space-y-6 bg-neutral-300">
          <div className="p-20">

         <h1 className="text-black text-6xl text-center font-extrabold mb-30 ">About Us</h1>
         <div className="text-black text-xl space-y-10  ">
            <p >
                We support law firms and lawyers through <span className="text-neutral-800 font-extrabold">BCI-compliant</span> digital services that focus on education,
visibility, and professional credibility.
</p>
<p>

Our work includes responsible content creation, social media management, website development,
search visibility, legal design & branding, and thought-leadership initiatives—all designed to improve
access to legal information while strictly adhering to the <span className="text-neutral-800 font-extrabold">Advocates Act, 1961 and the Bar Council of
India Rules.</span>
</p>
<p>
We take a compliance-first approach, prioritising ethical communication, public legal awareness, and
long-term institutional trust over promotional or solicitatory practices.
By combining legal expertise with digital strategy, we help law firms and individual practitioners
establish a professional presence that reflects their values and expertise in a responsible and credible
manner.
            </p>
          </div>
           
            
         </div>
         <div className="p-15 w-full bg-neutral-800 text-center mt-15">
            <p className="text-gray-300 text-2xl font-semibold">Check out our <Link to="/services" className="font-extrabold text-3xl underline hover:text-black">Services</Link> to see how we can help your firm build a strong, ethical digital presence.</p>
         </div>

       <ChooseUs/>
         </div>
        
        </>
    )
}
export default Home