
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function ContactUs(){






    return(
        <div className="mt-25 h-200 lg:h-screen bg-neutral-300 flex flex-col lg:flex-row items-center justify-start ">
         <div className="p-15 w-full h-fit bg-neutral-300 text-start  ">
            <p className="text-gray-600 text-xl lg:text-2xl font-semibold">Contact Us if you are a law firm 
                </p><p className="text-gray-600 text-2xl font-semibold">or an individual practitioner looking to build  <span className="text-neutral-800 mt-3 text-5xl lg:text-6xl block">A <span>Strong</span>, <span className="text-neutral-800 text-5xl lg:text-6xl block">Ethical,</span> <span className="text-neutral-800 text-5xl lg:text-6xl block">Digital Presence.</span></span></p>
         </div>
         <div className="flex flex-col items-center justify-center bg-neutral-400 p-10 rounded-2xl shadow-lg lg:mr-10">
            
         <div className="mr-0 lg:mr-10">
            <p className="text-gray-600 text-3xl font-semibold text-center">Write us to </p>
            <a href="mailto:akshayjosephjimmy05@gmail.com" className="text-2xl p-5 mr-5">companyEmail</a>
         </div>
         <div className=" flex flex-row gap-2">

            <FaFacebook className="text-4xl text-center mt-10 lg:block"/>
            <FaSquareInstagram className="text-4xl text-center mt-10 lg:block"/>
            <FaLinkedin className="text-4xl text-center mt-10 lg:block"/>
         </div>
         </div>
            
        </div> 
    )
}
export default ContactUs;