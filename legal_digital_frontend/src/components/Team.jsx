


function Team(){


const image = "/team.svg";


    return(
        <div className="w-full h-full mt-25 bg-neutral-300">
            <div className="p-15 w-full  bg-neutral-800 text-center ">

            <h1 className="text-2xl lg:text-4xl font-bold text-center text-neutral-200">Our Team</h1>
            </div>
            <div className="flex flex-row">

             <div className=" ">
                <div className="px-20 py-10 w-full h-fit bg-neutral-300 text-start align-middle ">

            <p className="text-gray-600 text-2xl font-semibold">Our Team Consists of  <span className="text-neutral-800 text-6xl block"> <span>Legal Professionals</span>, <span className="text-neutral-800 text-6xl block">Digital Specialists</span><span className="text-neutral-800 text-6xl block">and Developers</span></span></p>
                </div>
                <div className="px-20 py-10 w-full h-fit bg-neutral-300 text-start align-middle ">


            <p className="text-gray-600 text-2xl font-semibold">we work collaboratively to deliver <span className="text-neutral-800 text-6xl block"> <span>Ethically Compliant</span>, <span className="text-neutral-800 text-6xl block">Digital Services </span></span> for law firms and lawyers.</p>
                </div>
         </div>

            <figure className="px-10 w-200 top-70 object-cover mt-20">
                <img src={image} alt="Our Team" className="object-cover "/>
            </figure>
            </div>
            
        </div>
    )
}
export default Team;