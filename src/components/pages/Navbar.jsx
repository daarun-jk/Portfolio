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

  return (
    <div className="sticky top-0 z-10 flex flex-row justify-between w-full items-center px-6 md:px-16 py-5 bg-white/90 dark:bg-black/80 backdrop-blur-md">
      
      <div className="flex items-center w-1/4">        {/* <div>
          <img src={logo} alt="personal portfolio logo" className="w-9" />
        </div> */}
        <div className="text-2xl font-bold text-black dark:text-white">
          {props.name}
        </div>
      </div>

      <div className="hidden md:flex flex-1 justify-center gap-8">
          {props.sections.map((section) => {
          return <Section title={section} />;
        })}
        
        <div onClick={() => setDarkMode(!darkMode)} className="ml-4 cursor-pointer">
          {darkMode ? (
            <BsFillSunFill size={20} className="text-white" />
          ) : (
            <BsFillMoonStarsFill size={20} className="text-black" />
          )}
        </div>
      </div>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-600 dark:text-gray md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white dark:bg-black text-black dark:text-white">
          {props.sections.map((section) => {
            return <Section title={section} />;
          })}
        </ul>
      )}
    </div>
  );
}
