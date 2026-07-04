import DaarunImage from "../../assets/img/Daarun2.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto h-full mt-4 md:mt-10">

      {/* Left Side: Greeting & About Text */}
      <div className="flex flex-col flex-1 py-5 pr-0 md:pr-10 w-full">
        
        {/* Terminal Boot Sequence */}
        <div className="font-fira text-[15px] md:text-lg text-sky-600 dark:text-sciCyan mb-4 h-16 md:h-8 flex items-center">
          <span className="mr-2 opacity-70 hidden md:inline">root@sys:~$</span>
          <span className="mr-2 opacity-70 md:hidden">&gt;</span>
          <TypeAnimation
            sequence={[
              "./initialize_profile.sh",
              500,
              "Loading kernel modules...",
              300,
              "Hi, I'm Daarun.",
              1000,
            ]}
            wrapper="span"
            speed={60}
            repeat={0}
            className="font-bold drop-shadow-[0_0_8px_rgba(0,255,204,0.5)]"
          />
        </div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="text-3xl md:text-[45px] font-semibold text-slate-900 dark:text-white font-poppins leading-tight mt-2"
        >
          Software Engineer.
        </motion.h1>

        {/* About Section Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          className="text-slate-700 dark:text-white py-6 max-w-2xl text-[15px] md:text-[16px] leading-relaxed font-fira"
        >
          <p className="mb-4">
            I'm a Software Developer who doesn't just write code, but looks for interesting problems to solve.
          </p>
          <p>
            My engineering style is heavily influenced by <span className="text-sky-600 dark:text-sciCyan font-semibold">cybersecurity</span> and <span className="text-sky-600 dark:text-sciCyan font-semibold">systems programming</span>, meaning I genuinely enjoy the messy process of trial, error, and figuring things out.
          </p>
        </motion.div>

        {/* Resume Button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.3 }}
          className="py-4"
        >
          <a
            href="https://drive.google.com/file/d/1-2VUMp07B_-ygkMPuYIsT6WhMSYXT0pP/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <Button title={"[ Download Profile Data ]"} />
          </a>
        </motion.div>
      </div>

      {/* Right Side: Profile Image */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="flex flex-col items-center md:items-end mt-10 md:mt-0 relative group shrink-0"
      >
        {/* Decorative Glitch / Target Frame */}
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-sky-400 dark:border-sciCyan animate-[spin_15s_linear_infinite] opacity-50 w-56 h-56 md:w-80 md:h-80 m-auto pointer-events-none"></div>
        <div className="absolute inset-0 rounded-full border border-sky-400 dark:border-sciCyan animate-[spin_20s_linear_infinite_reverse] opacity-20 w-64 h-64 md:w-[360px] md:h-[360px] m-auto pointer-events-none"></div>
        
        <img
          src={DaarunImage}
          alt="Daarun's Profile"
          className="rounded-full w-56 h-56 md:w-80 md:h-80 object-cover shadow-[0_0_30px_rgba(2,132,199,0.3)] dark:shadow-[0_0_30px_rgba(0,255,204,0.2)] group-hover:scale-105 group-hover:shadow-[0_0_50px_rgba(0,255,204,0.4)] transition-all duration-500 relative z-10"
        />
      </motion.div>

    </div>
  );
}


function Button(props) {
  return (
    <div className="relative inline-flex group cursor-pointer">
      <div className="absolute transition-all duration-500 opacity-50 -inset-px bg-gradient-to-r from-sky-500 to-sky-600 dark:from-sciCyan dark:to-sciMagenta rounded-xl blur-md group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-pulse"></div>
      <div className="relative inline-flex items-center justify-center px-6 py-2.5 text-[14px] font-bold text-slate-100 dark:text-black font-fira bg-slate-900 dark:bg-sciCyan rounded-xl uppercase tracking-wider">
        {props.title}
      </div>
    </div>
  );
}
