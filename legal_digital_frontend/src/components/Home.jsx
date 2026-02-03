import ChooseUs from "./ChooseUs"
import HomeHero from "./HomeHero"





function Home(){



    return(
        
        <>
         <HomeHero/>
         <div className="p-20 space-y-6 bg-gray-200">

         <h1 className="text-black text-6xl text-center font-extrabold mb-30">About us</h1>
         <div className="text-black text-xl space-y-10  ">
            <p>
                We support law firms and lawyers through BCI-compliant digital services that focus on education,
visibility, and professional credibility.
</p>
<p>

Our work includes responsible content creation, social media management, website development,
search visibility, legal design & branding, and thought-leadership initiatives—all designed to improve
access to legal information while strictly adhering to the Advocates Act, 1961 and the Bar Council of
India Rules.
</p>
<p>
We take a compliance-first approach, prioritising ethical communication, public legal awareness, and
long-term institutional trust over promotional or solicitatory practices.
By combining legal expertise with digital strategy, we help law firms and individual practitioners
establish a professional presence that reflects their values and expertise in a responsible and credible
manner.
            </p>
            
         </div>
       <ChooseUs/>
         </div>
        </>
    )
}
export default Home