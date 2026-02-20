


function Team(){


const image = "/team.svg";


    return(
        <div className="w-full h-full mt-25 bg-neutral-300">
            <div className="p-15 w-full  bg-neutral-800 text-center ">

            <h1 className="text-4xl font-bold text-center text-neutral-200">Our Team</h1>
            </div>
            <div className="flex flex-row">

            <div className="text-black text-2xl  p-20 ">

            <p>Our team comprises legal professionals and digital specialists working collaboratively to
deliver ethically compliant digital services for law firms and lawyers.
</p>

<p>
All legal content, frameworks, and public-facing communication are created or reviewed by
qualified legal professionals to ensure alignment with the Advocates Act, 1961 and the Bar
Council of India Rules</p>

            </div>
            <figure className="px-10 ">
                <img src={image} alt="Our Team" className="w-500 h-100 object-cover "/>
            </figure>
            </div>
            <div className="flex flex-row">

            <div className="p-15 w-full h-fit bg-neutral-300 text-start mt-15">
            <p className="text-gray-600 text-2xl font-semibold">Contact Us if you are a law firm looking to build  
                <span className="text-neutral-800 text-4xl block">A 
                    <span> Strong</span>,
                     <span className="text-neutral-800 text-4xl block">Ethical,
                        </span> 
                        <span className="text-neutral-800 text-4xl block">Digital Presence.
                            </span></span></p>
         </div>
         <div className="p-15 w-full h-fit bg-neutral-300 text-start mt-15">
            <p className="text-gray-600 text-2xl font-semibold">Contact Us if you are a law firm looking to build  
                <span className="text-neutral-800 text-4xl block">A 
                    <span> Strong</span>,
                     <span className="text-neutral-800 text-4xl block">Ethical,
                        </span> 
                        <span className="text-neutral-800 text-4xl block">Digital Presence.
                            </span></span></p>
         </div>
            </div>
        </div>
    )
}
export default Team;