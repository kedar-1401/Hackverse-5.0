import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { Hackverse } from "../HackAssets/index";
import { navigation } from "../Constants";

import { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"; // Social media icons

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-black lg:backdrop-blur-sm ${
        openNavigation ? "bg-black" : "bg-black"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={Hackverse} width={150} height={20} alt="Hackverse 5.0" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-black lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-white transition-colors hover:text-red-600 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-4 py-2 md:py-6 lg:mr-2 lg:text-xl lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-white"
                    : "lg:text-white/50"
                } lg:leading-5 lg:hover:text-red-600 xl:px-6`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>

        {/* Social media icons */}
        <div className="hidden lg:flex items-center space-x-4 ml-auto">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white hover:text-red-600" size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white hover:text-red-600" size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white hover:text-red-600" size={24} />
          </a>
        </div>

        
      </div>
    </div>
  );
};

export default Header;
