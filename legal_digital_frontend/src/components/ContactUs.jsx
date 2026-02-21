
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function ContactUs(){






    return(
        <div className="mt-25 h-screen bg-neutral-300 flex  items-center justify-start ">
         <div className="p-15 w-full h-fit bg-neutral-300 text-start  ">
            <p className="text-gray-600 text-2xl font-semibold">Contact Us if you are a law firm 
                </p><p className="text-gray-600 text-2xl font-semibold">or an individual practitioner looking to build  <span className="text-neutral-800 text-6xl block">A <span>Strong</span>, <span className="text-neutral-800 text-6xl block">Ethical,</span> <span className="text-neutral-800 text-6xl block">Digital Presence.</span></span></p>
         </div>
         <div className="flex flex-col items-center justify-center mr-10">
            
         <div className="mr-10">
            <p className="text-gray-600 text-3xl font-semibold text-center">Write us to </p>
            <a href="mailto:akshayjosephjimmy05@gmail.com" className="text-2xl p-5 mr-5">companyEmail</a>
         </div>
         <div className="items-center justify-center">

            <FaFacebook className="text-2xl text-center mt-10 block"/>
            <FaSquareInstagram className="text-2xl text-center mt-10 block"/>
            <FaLinkedin className="text-2xl text-center mt-10 block"/>
         </div>
         </div>
            
        </div> 
    )
}
export default ContactUs;