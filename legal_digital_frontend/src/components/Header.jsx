import { RxHamburgerMenu } from "react-icons/rx";
import useScreenWidth from "../hooks/useScreenWidth";
import { Link } from "react-router-dom";



function Header(){

const width=useScreenWidth();




    return(
        <div className="w-full fixed z-50 top-0 h-25 bg-neutral-300 flex items-center justify-between px-4 shadow-lg">
            <h1 className=" text-2xl font-bold">Company Name</h1>
            {width<500?<RxHamburgerMenu className="text-2xl" />:<nav>
                <ul className="flex space-x-4">
                    <Link to="/" className=" text-lg font-semibold hover:bg-neutral-800 hover:text-gray-300 p-1 rounded-lg cursor-pointer transition-all duration-300">Home</Link>
                    <Link to="/services" className="text-lg font-semibold hover:bg-neutral-800 hover:text-gray-300 p-1 rounded-lg cursor-pointer transition-all duration-300">Services</Link>
                    <Link to="/team" className="text-lg font-semibold hover:bg-neutral-800 hover:text-gray-300 p-1 rounded-lg cursor-pointer transition-all duration-300">Our Team</Link>
                    <Link to="/contact" className="text-lg font-semibold hover:bg-neutral-800 hover:text-gray-300 p-1 rounded-lg cursor-pointer transition-all duration-300">Contact Us</Link>
                    
                </ul>

            </nav>}
            
        </div>
    )
}
export default Header