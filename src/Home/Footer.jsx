import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; 

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation(); 
  const showEmailSignup = location.pathname === "/men" || location.pathname === "/women"; 

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (footer) {
        const footerPosition = footer.getBoundingClientRect().top;
        setIsVisible(footerPosition <= window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="bg-[#212121] text-white py-10 px-6">
      {/* Conditional Email Signup Section(for men,women page) */}
      {showEmailSignup && (
        <div className="md:w-1/3 mb-10 sm:px-4">
          <h3 className="text-white text-lg mb-2 font-semibold">
            Enter your email to stay in touch!
          </h3>
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="email" 
              placeholder="Your email"
              className="flex-1 p-3 rounded-xs bg-gray-500 text-black outline-none border-b-2 border-white focus:shadow-[inset_0_-4px_12px_rgba(0,0,0,0.4),inset_0_4px_12px_rgba(0,0,0,0.4)]"
            />
            <button className="bg-gray-500 text-white min-w-fit px-6 py-3 rounded-xs font-semibold hover:bg-gray-200 hover:text-black transition cursor-pointer">
              SIGN UP
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h3 className="font-semibold text-xl text-center md:text-left">
            HELP
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-center md:text-left md:w-fit">
            <li>Chat with us!</li>
            <li>1-888-923-6944</li>
            <li>1-814-251-7466(Text)</li>
            <li>help@Earthstride.com</li>
            <li>Returns/Exchanges</li>
            <li>FAQ/Contact Us</li>
            <li>Afterpay</li>
          </ul>
        </div>

       
        <div>
          <h3 className="font-semibold text-xl text-center md:text-left">
            SHOP
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-center md:text-left md:w-fit">
            <li>Men's Shoes</li>
            <li>Women's Shoes</li>
            <li>Men's Apparel</li>
            <li>Women's Apparel</li>
            <li>Socks</li>
            <li>Gift Cards</li>
            <li>Refer a Friend</li>
          </ul>
        </div>

     
        <div>
          <h3 className="font-semibold text-xl text-center md:text-left">
            COMPANY
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-center md:text-left md:w-fit">
            <li>Our Stores</li>
            <li>Our Story</li>
            <li>Our Materials</li>
            <li>Sustainability</li>
            <li>Investors</li>
            <li>Shoe Care</li>
            <li>Affiliates</li>
            <li>Bulk Orders</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Responsible Disclosure</li>
            <li>California Transparency Act</li>
            <li>Community Offers</li>
            <li>Our Blog</li>
            <li>Patents</li>
          </ul>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto mt-10 flex flex-wrap md:justify-between flex-col md:flex-row items-center">
        <div>
          <h3 className="font-semibold text-xl text-center">FOLLOW THE FLOCK</h3>
          <p className="text-sm mt-2 max-w-xs md:pl-4 text-center md:text-left">
            Exclusive offers, a heads-up on new things, and sightings of
            Earthstride in the wild. Oh, we have cute sheep, too. #earthstride
          </p>
          <div className="flex space-x-3 m-5 justify-center">
            <ul className="flex justify-center space-x-6">
              <li>
                <i className="fa-brands fa-instagram text-white text-2xl hover:text-pink-500 transition"></i>
              </li>
              <li>
                <i className="fa-brands fa-tiktok text-white text-2xl hover:text-black transition"></i>
              </li>
              <li>
                <i className="fa-brands fa-x-twitter text-white text-2xl hover:text-gray-400 transition"></i>
              </li>
              <li>
                <i className="fa-brands fa-facebook text-white text-2xl hover:text-blue-500 transition"></i>
              </li>
              <li>
                <i className="fa-brands fa-youtube text-white text-2xl hover:text-red-500 transition"></i>
              </li>
              <li>
                <i className="fa-brands fa-pinterest text-white text-2xl hover:text-red-600 transition"></i>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex space-x-2 text-5xl w-fit flex-wrap cursor-pointer">
          <span>🇺🇸</span> <span>🇨🇦</span> <span>🇦🇺</span> <span>🇬🇧</span>
          <span>🇨🇳</span> <span>🇩🇪</span> <span>🇪🇺</span> <span>🇯🇵</span>
          <span>🇰🇷</span> <span>🇦🇪</span>
        </div>
      </div>

      <div className="text-center text-xs mt-6">
        <p>
          © 2025 Erathstride, Inc. All Rights Reserved.{" "}
          <span className="underline">Terms</span>,{" "}
          <span className="underline">Privacy</span> &{" "}
          <span className="underline">Accessibility</span>
        </p>
        <p className="mt-1 underline">Do Not Sell My Personal Information</p>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 bg-gray-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-gray-600 cursor-pointer transition ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <i className="fas fa-chevron-up text-xl"></i>
      </button>
    </footer>
  );
};

export default Footer;
