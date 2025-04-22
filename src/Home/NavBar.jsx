import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-40  py-4 border-b border-gray-200">
      <div className="mx-auto flex items-center justify-between px-6 xl:px-10">
        <button
          className="xl:hidden flex flex-col justify-between w-8 h-[23px] relative cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-0.75 w-full bg-black rounded transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          ></span>

          <span
            className={`block h-[2.4px] w-full bg-black rounded transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>

          <span
            className={`block h-0.75 w-full bg-black rounded transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          ></span>
        </button>

        <ul className="hidden xl:flex space-x-6 font-medium text-sm uppercase">
          <li>
            <a href="/men" className="hover:border-b">
              <Link to="/men">Men</Link>
            </a>
          </li>
          <li>
            <a href="/women" className="hover:border-b">
              <Link to="/women">Women</Link>
            </a>
          </li>
          <li>
            <a href="#" className="hover:border-b">
              Socks
            </a>
          </li>
          <li>
            <a href="#" className="hover:border-b">
              New Arrivals
            </a>
          </li>
        </ul>

        <a
          href="#"
          className="text-2xl sm:text-3xl font-bold italic absolute left-1/2 transform -translate-x-1/2"
        >
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
          >
            𝐸𝒶𝓇𝓉𝒽𝒮𝓉𝓇𝒾𝒹𝑒
          </Link>
        </a>

        <ul className="hidden ms-auto xl:flex space-x-6 font-medium text-sm uppercase">
          <li>
            <a href="#" className="hover:border-b">
              Sustainability
            </a>
          </li>
          <li>
            <a href="#" className="hover:border-b">
              Rerun
            </a>
          </li>
          <li>
            <a href="#" className="hover:border-b">
              Stores
            </a>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex ml-5 space-x-6 text-[1.5em] items-center">
          <i className="fas fa-search cursor-pointer !hidden lg:!block"></i>
          <i className="fa-regular fa-user cursor-pointer !hidden xl:!block"></i>
          <i className="fa-regular fa-question-circle cursor-pointer !hidden xl:!block"></i>
          <i className="fa-solid fa-shopping-cart custom-icon cursor-pointer"></i>
        </div>
      </div>

      <div
        className={`xl:hidden absolute top-full left-0 w-full bg-white shadow-md p-5 pb-1 overflow-hidden z-50 transition-all duration-300 ease-out ${
          menuOpen ? "h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col space-y-8 lg:space-y-10 font-medium text-sm uppercase max-h-[500px] opacity-100">
          <li className="border-b border-gray-300 pb-2">
            <a href="/men" className="hover:border-b">
              Men
            </a>
          </li>
          <li className="border-b border-gray-300 pb-2">
            <a href="/women" className="hover:border-b">
              Women
            </a>
          </li>
          <li className="border-b border-gray-300 pb-2">
            <a href="#" className="hover:border-b">
              Socks
            </a>
          </li>
          <li className="border-b border-gray-300 pb-2">
            <a href="#" className="hover:border-b">
              New Arrivals
            </a>
          </li>
          <li className="border-b border-gray-300 pb-2">
            <a href="#" className="hover:border-b">
              Sustainability
            </a>
          </li>
          <li className="border-b border-gray-300 pb-2">
            <a href="#" className="hover:border-b">
              Rerun
            </a>
          </li>
          <li className="border-b border-gray-300 pb-2">
            <a href="#" className="hover:border-b">
              Stores
            </a>
          </li>
          <li className="border-b border-gray-300 pb-2">
            <a href="#" className="hover:border-b">
              Account
            </a>
          </li>
          <li className="border-b border-gray-300 pb-2">
            <a href="#" className="hover:border-b">
              Help
            </a>
          </li>
        </ul>
      </div>

      {/* Search Bar */}
      <div className="lg:hidden mt-3  relative flex items-center w-full px-5">
        <i className="fas fa-search absolute left-9 text-gray-500"></i>
        <input
          type="text"
          placeholder="Enter Search Term"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2  rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 bg-gray-100"
        />
      </div>
    </nav>
  );
};

export default Navbar;
