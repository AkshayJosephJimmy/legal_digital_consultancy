import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import useScreenWidth from "../hooks/useScreenWidth";
import { Link } from "react-router-dom";

function Header() {
  const [clicked, setClicked] = useState(false);
  const width = useScreenWidth();

  return (
    <div className="w-full fixed z-50 top-0 h-25 bg-neutral-300 flex items-center justify-between px-4 shadow-lg">
      <h1 className="text-2xl font-bold">Company Name</h1>

      {width < 500 ? (
        // MOBILE MENU WRAPPER
        <div className="relative">
          <RxHamburgerMenu
            className="text-3xl cursor-pointer"
            onClick={() => setClicked(!clicked)}
          />

          {clicked && (
            <div className="absolute right-0 mt-3 bg-neutral-200 shadow-lg rounded-lg w-40 py-2 flex flex-col">
              <Link
                to="/"
                className="px-4 py-2 hover:bg-neutral-800 hover:text-white transition-all"
                onClick={() => setClicked(false)}
              >
                Home
              </Link>

              <Link
                to="/services"
                className="px-4 py-2 hover:bg-neutral-800 hover:text-white transition-all"
                onClick={() => setClicked(false)}
              >
                Services
              </Link>

              <Link
                to="/team"
                className="px-4 py-2 hover:bg-neutral-800 hover:text-white transition-all"
                onClick={() => setClicked(false)}
              >
                Our Team
              </Link>

              <Link
                to="/contact"
                className="px-4 py-2 hover:bg-neutral-800 hover:text-white transition-all"
                onClick={() => setClicked(false)}
              >
                Contact Us
              </Link>
            </div>
          )}
        </div>
      ) : (
        // DESKTOP MENU
        <nav>
          <ul className="flex space-x-4">
            <Link
              to="/"
              className="text-lg font-semibold hover:bg-neutral-800 hover:text-gray-300 p-1 rounded-lg transition-all duration-300"
            >
              Home
            </Link>

            <Link
              to="/services"
              className="text-lg font-semibold hover:bg-neutral-800 hover:text-gray-300 p-1 rounded-lg transition-all duration-300"
            >
              Services
            </Link>

            <Link
              to="/team"
              className="text-lg font-semibold hover:bg-neutral-800 hover:text-gray-300 p-1 rounded-lg transition-all duration-300"
            >
              Our Team
            </Link>

            <Link
              to="/contact"
              className="text-lg font-semibold hover:bg-neutral-800 hover:text-gray-300 p-1 rounded-lg transition-all duration-300"
            >
              Contact Us
            </Link>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Header;