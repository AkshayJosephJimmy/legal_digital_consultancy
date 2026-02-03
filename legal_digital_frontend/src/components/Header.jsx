import { RxHamburgerMenu } from "react-icons/rx";
import useScreenWidth from "../hooks/useScreenWidth";
import { Link } from "react-router-dom";



function Header(){

const width=useScreenWidth();




    return(
        <div className="w-full h-25 bg-gray-200 flex items-center justify-between px-4">
            <h1 className=" text-2xl font-bold">Company Name</h1>
            {width<500?<RxHamburgerMenu className="text-2xl" />:<nav>
                <ul className="flex space-x-4">
                    <Link to="/" className="hover:text-yellow-500 cursor-pointer">Home</Link>
                    <Link to="/about" className="hover:text-blue-500 cursor-pointer">About</Link>
                    <Link to="/services" className="hover:text-blue-500 cursor-pointer">Services</Link>
                    <li className="hover:text-blue-500 cursor-pointer">Our Team</li>
                    
                </ul>

            </nav>}
            
        </div>
    )
}
export default Header