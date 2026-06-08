import Section from "../parts/Section";
// import logo from "../../assets/img/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

export default function Navbar(props) {
  const [nav, setNav] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Automatically closes the mobile menu if the user resizes the window to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // Changed to z-50 so the Navbar is always the highest element on the page
    <div className="sticky top-0 z-50 flex flex-row justify-between w-full items-center px-6 lg:px-12 py-5 bg-white/90 dark:bg-black/90 backdrop-blur-md">
      
      {/* LEFT: Logo / Name */}
      {/* <div className="z-50 shrink-0">
          <div className="text-2xl font-bold text-black dark:text-white">
          {props.name}
        </div>
      </div> */}

      {/* CENTER: Desktop Links */}
      <div className="hidden lg:flex flex-1 justify-center gap-5 xl:gap-8">
        {props.sections.map((section, index) => (
          <Section key={index} title={section} />
        ))}
      </div>
      
      {/* RIGHT: Desktop Dark Mode Toggle */}
      <div className="hidden lg:flex shrink-0 items-center">
        <div className="h-6 w-px bg-gray-300 dark:bg-gray-700 mr-6"></div>
        <div onClick={() => setDarkMode(!darkMode)} className="cursor-pointer transition-transform hover:scale-110">
          {darkMode ? (
            <BsFillSunFill size={20} className="text-white" />
          ) : (
            <BsFillMoonStarsFill size={20} className="text-black" />
          )}
        </div>
      </div>

      {/* Hamburger / Close Icon (Mobile) */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-50 shrink-0 text-gray-600 dark:text-gray-300 lg:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* MOBILE MENU */}
      {nav && (
        <ul className="flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-white dark:bg-black text-black dark:text-white gap-8 z-40">
          {props.sections.map((section, index) => (
            // Added onClick handler to close the menu when a link is clicked
            <div onClick={() => setNav(false)} key={index}>
              <Section title={section} />
            </div>
          ))}
          
          {/* Mobile Dark Mode Toggle */}
          <div className="h-px w-24 bg-gray-300 dark:bg-gray-700 my-4"></div>
          <div 
            onClick={() => { 
              setDarkMode(!darkMode); 
              setNav(false); 
            }} 
            className="cursor-pointer flex items-center gap-3"
          >
            {darkMode ? (
              <><BsFillSunFill size={24} className="text-white" /> <span>Light Mode</span></>
            ) : (
              <><BsFillMoonStarsFill size={24} className="text-black" /> <span>Dark Mode</span></>
            )}
          </div>
        </ul>
      )}
    </div>
  );
}
