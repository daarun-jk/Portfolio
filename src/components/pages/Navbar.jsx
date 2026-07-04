import { scrollToElement } from "../scrollAnimations";
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
    // Floating glass command center
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex flex-row justify-between w-[95%] max-w-6xl items-center px-6 lg:px-10 py-3 bg-white/70 dark:bg-sciDark/70 backdrop-blur-lg dark:backdrop-blur-none border border-white/20 dark:border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,255,204,0.1)] transition-all">

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
            <BsFillSunFill size={20} className="text-sciCyan drop-shadow-[0_0_5px_rgba(0,255,204,0.5)]" />
          ) : (
            <BsFillMoonStarsFill size={20} className="text-sky-600 drop-shadow-[0_0_5px_rgba(2,132,199,0.5)]" />
          )}
        </div>
      </div>

      {/* Hamburger / Close Icon (Mobile) */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-50 shrink-0 text-sky-600 dark:text-sciCyan lg:hidden w-full flex justify-end"
      >
        {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
      </div>

      {/* MOBILE MENU */}
      {nav && (
        <ul className="flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-slate-50 dark:bg-sciDark text-slate-900 dark:text-white gap-8 z-40">
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
              <><BsFillSunFill size={24} className="text-sciCyan" /> <span>Light Mode</span></>
            ) : (
              <><BsFillMoonStarsFill size={24} className="text-sky-600" /> <span>Dark Mode</span></>
            )}
          </div>
        </ul>
      )}
    </div>
  );
}

function Section(props) {
  return (
    <div className="flex">
      <button
        className="ml-0 lg:ml-8 text-base lg:text-lg font-fira text-slate-700 dark:text-white hover:text-sky-600 dark:hover:text-sciCyan focus:text-sky-600 dark:focus:text-sciCyan focus:font-bold transition-colors"
        onClick={(event) => {
          scrollToElement(props.title);
        }}
      >
        <span className="text-sky-500 dark:text-sciCyan mr-1">#</span>
        {props.title}
      </button>
    </div>
  );
}
