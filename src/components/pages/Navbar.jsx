import Section from "../parts/Section";
// import logo from "../../assets/img/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Navbar(props) {
  const [nav, setNav] = useState(false);

  return (
    <div className="sticky top-0 z-10 flex flex-row justify-between w-full items-center px-10 md:px-30 py-5 bg-black/100 backdrop-blur-sm">
      <div className="flex align-middle">
        <div>
          {/* <img src={logo} alt="personal portfolio logo" className="w-9" /> */}
        </div>
        <div className="mx-2 text-2xl font-bold text-white">{props.name}</div>
      </div>
      <div className="hidden md:flex">
        {props.sections.map((section) => {
          return <Section title={section} />;
        })}
      </div>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {props.sections.map((section) => {
            return <Section title={section} />;
          })}
        </ul>
      )}
    </div>
  );
}
