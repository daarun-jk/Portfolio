import { useState, useEffect } from "react";
import About from "./components/pages/About";
import Skills from "./components/pages/Skills";
import Projects from "./components/pages/Projects";
import Experience from "./components/pages/Experience";
import Education from "./components/pages/Education";
import Achievements from "./components/pages/Achievements";
import BackgroundParticles from "./components/BackgroundParticles";
import { motion, AnimatePresence } from "framer-motion";
import { FaTerminal, FaCode, FaServer, FaGraduationCap, FaTrophy, FaUserCircle, FaGithub, FaLinkedin, FaEnvelope, FaSun, FaMoon } from "react-icons/fa";

export default function App() {
  const [activeModule, setActiveModule] = useState("about");
  const [dark, setDark] = useState(true);

  // Initialize theme
  useEffect(() => {
    if (localStorage.getItem("theme") === "light") {
      setDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDark(!dark);
  };

  const modules = [
    { id: "about", name: "User Profile", icon: <FaUserCircle /> },
    { id: "skills", name: "System Modules", icon: <FaTerminal /> },
    { id: "experience", name: "Execution Logs", icon: <FaServer /> },
    { id: "projects", name: "Active Deployments", icon: <FaCode /> },
    { id: "education", name: "Training Data", icon: <FaGraduationCap /> },
    { id: "achievements", name: "Clearance Level", icon: <FaTrophy /> },
  ];

  const renderActiveModule = () => {
    switch (activeModule) {
      case "about": return <About subtitle="Software Engineer" />;
      case "skills": return <Skills />;
      case "experience": return <Experience />;
      case "projects": return <Projects />;
      case "education": return <Education />;
      case "achievements": return <Achievements />;
      default: return <About subtitle="Software Engineer" />;
    }
  };

  return (
    <div className="w-full h-[100dvh] overflow-hidden relative text-slate-900 dark:text-white transition-colors duration-300 font-fira flex flex-col md:flex-row">
      {/* Background Layer */}
      <div className="fixed inset-0 -z-20 bg-slate-100 dark:bg-black transition-colors duration-300"></div>
      <BackgroundParticles />

      {/* Mobile Top Bar */}
      <div className="md:hidden w-full h-16 shrink-0 bg-white/90 dark:bg-black backdrop-blur-md dark:backdrop-blur-none border-b border-slate-300 dark:border-sciCyan flex items-center justify-between px-4 z-50 shadow-md">
        <div className="font-bold text-sky-600 dark:text-sciCyan text-lg flex items-center gap-2">
          <FaTerminal />
          <span>DaarunOS v2.0</span>
        </div>
        <button onClick={toggleTheme} className="p-2 bg-slate-200 dark:bg-sciCyan/10 rounded-lg text-slate-700 dark:text-sciCyan hover:bg-slate-300 dark:hover:bg-sciCyan/20 transition">
          {dark ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>
      </div>

      {/* Sidebar (Navigation) - Appears as Top Tabs on Mobile, Left Sidebar on Desktop */}
      <nav className="w-full md:w-72 h-auto md:h-full shrink-0 bg-white/80 dark:bg-black backdrop-blur-xl dark:backdrop-blur-none border-b md:border-b-0 md:border-r border-slate-300 dark:border-sciCyan flex flex-col z-40 p-4 md:p-6 shadow-2xl">
        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between mb-10 pb-4 border-b border-slate-300 dark:border-sciCyan">
          <div className="font-bold text-sky-600 dark:text-sciCyan text-xl flex items-center gap-2">
            <FaTerminal />
            <span>DaarunOS</span>
          </div>
          <button onClick={toggleTheme} className="p-2 bg-slate-200 dark:bg-sciCyan/10 rounded-lg text-slate-700 dark:text-sciCyan hover:bg-slate-300 dark:hover:bg-sciCyan/20 transition">
            {dark ? <FaSun size={16} /> : <FaMoon size={16} />}
          </button>
        </div>

        {/* Navigation Menu */}
        <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-hide">
          <span className="hidden md:block text-xs font-bold text-slate-400 dark:text-sciCyan/50 mb-2 uppercase tracking-widest">Directory Tree</span>
          {modules.map((mod) => (
            <button
              key={mod.id}
              onClick={() => setActiveModule(mod.id)}
              className={`flex items-center gap-3 px-4 py-2 md:py-3 rounded-lg text-[13px] md:text-[14px] font-semibold transition-all whitespace-nowrap md:whitespace-normal border ${
                activeModule === mod.id
                  ? "bg-sky-500 text-white border-sky-500 shadow-[0_0_15px_rgba(2,132,199,0.5)] dark:bg-sciCyan dark:text-black dark:border-sciCyan dark:shadow-[0_0_15px_rgba(0,255,204,0.5)]"
                  : "bg-transparent text-slate-600 dark:text-sciCyan/70 border-transparent hover:bg-white/50 dark:hover:bg-sciCyan/10 hover:border-slate-300 dark:hover:border-zinc-700"
              }`}
            >
              <span className={`text-lg ${activeModule === mod.id ? "animate-pulse" : ""}`}>{mod.icon}</span>
              <span className="block">{mod.name}</span>
            </button>
          ))}
        </div>

        {/* Footer (Social Links) */}
        <div className="hidden md:flex flex-col mt-auto pt-6 border-t border-slate-300 dark:border-sciCyan">
          <div className="flex gap-4 justify-center">
            <a href="https://github.com/daarun-jk" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-sky-600 dark:hover:text-sciCyan transition-colors">
              <FaGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/daarun-jk/" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-sky-600 dark:hover:text-sciCyan transition-colors">
              <FaLinkedin size={22} />
            </a>
            <a href="mailto:daarun.jaguvakannan@gmail.com" className="text-slate-500 hover:text-sky-600 dark:hover:text-sciCyan transition-colors">
              <FaEnvelope size={22} />
            </a>
          </div>
          <p className="text-center text-[10px] text-slate-400 dark:text-sciCyan/50 mt-4 tracking-widest">
            SYS.OP. DAARUN // 2026
          </p>
        </div>
      </nav>

      {/* Main Terminal Area */}
      <main className="flex-1 w-full h-full relative overflow-y-auto p-4 md:p-10 scrollbar-hide">
        {/* Decorative Top Bar for Terminal */}
        <div className="hidden md:flex sticky top-0 z-30 w-full mb-8 items-center justify-between bg-white/90 dark:bg-black backdrop-blur-md dark:backdrop-blur-none px-6 py-2 border border-slate-200 dark:border-sciCyan rounded-lg shadow-sm">
          <div className="text-xs font-semibold text-slate-500 dark:text-sciCyan/70 tracking-widest">
            {`> root@sys /${activeModule}`}
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400 dark:bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-400 dark:bg-emerald-500/80"></div>
          </div>
        </div>

        {/* Module Content Mount Point */}
        <div className="w-full pb-24 md:pb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeModule}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {renderActiveModule()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
