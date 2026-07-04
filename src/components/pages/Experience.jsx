import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaTerminal } from "react-icons/fa"; // Importing dropdown arrows
import UTSLogo from "../../assets/img/UTS1.png";
import UnisysLogo from "../../assets/img/Unisys5.png";
import VTFLogo from "../../assets/img/VTF3.png";
import IIScLogo from "../../assets/img/IISc2.png";
import { motion, AnimatePresence } from "framer-motion";


// Sub-component to handle the open/close state for each individual job
const ExperienceItem = ({ exp, index }) => {
  // By default, the first job (index 0) will be open, and the rest closed
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative pl-8 md:pl-16 mb-8"
    >
      {/* Timeline Dot */}
      <div className="absolute left-[-5px] md:left-[21px] top-6 h-3 w-3 bg-sky-500 dark:bg-sciCyan rounded-sm ring-4 ring-slate-50 dark:ring-sciDark z-10 shadow-[0_0_10px_rgba(0,255,204,0.8)]"></div>

      {/* Clickable Header Box (Glassmorphism) */}
      <div
        className="flex flex-col md:flex-row md:items-center justify-between cursor-pointer bg-white/50 dark:bg-black backdrop-blur-md dark:backdrop-blur-none border border-slate-200/50 dark:border-sciCyan hover:border-sky-400 dark:hover:border-sciCyan hover:shadow-[0_0_15px_rgba(0,255,204,0.15)] transition-all rounded-xl p-4 group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
          {/* Company Logo Box */}
          <div className="w-12 h-12 bg-white/80 dark:bg-sciCyan/10 rounded-lg flex items-center justify-center p-1.5 shadow-sm shrink-0 overflow-hidden border border-slate-200 dark:border-sciCyan group-hover:border-sky-400 dark:group-hover:border-sciCyan transition-colors">
            {exp.logo ? (
              <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-contain" />
            ) : (
              <FaTerminal className="text-xl text-slate-500" />
            )}
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins group-hover:text-sky-600 dark:group-hover:text-sciCyan transition-colors">
              {exp.role}
            </h3>
            <h4 className="text-[15px] font-medium text-sky-600 dark:text-sky-400 mt-0.5 font-fira flex items-center gap-2">
              <span className="opacity-50 text-xs">@</span> {exp.company}
            </h4>
          </div>
        </div>

        {/* Right Side: Date & Chevron Icon */}
        <div className="flex items-center justify-between mt-3 md:mt-0 gap-4 pl-14 md:pl-0">
          <div className="px-2.5 py-1 bg-slate-200/50 dark:bg-black text-slate-700 dark:text-white text-xs font-fira rounded-md border border-slate-300/50 dark:border-sciCyan">
            [{exp.date}]
          </div>
          <div className="text-sky-500 dark:text-sciCyan hidden md:block transition-transform duration-300">
            {isOpen ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
          </div>
        </div>
      </div>

      {/* Expandable Bullet Points (Framer Motion) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-3 bg-white/30 dark:bg-sciCyan/5 backdrop-blur-sm border-l-2 border-sky-400 dark:border-sciCyan ml-6 md:ml-10 p-4 rounded-r-lg">
              <ul className="list-none space-y-2.5 text-slate-700 dark:text-white font-fira text-[13px]">
                {exp.bullets.map((bullet, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + (i * 0.05) }}
                    className="leading-relaxed flex items-start gap-2"
                  >
                    <span className="text-sky-500 dark:text-sciCyan mt-0.5 text-[10px]">&gt;</span>
                    {bullet}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};


export default function Experience() {
  const experiences = [
    {
      role: "Information Technology Intern",
      company: "The University of Texas System",
      date: "Jun 2025 – May 2026",
      logo: UTSLogo,
      bullets: [
        "Built a Python optimization engine using Mixed Integer Linear Programming to automate software release schedules.",
        "Engineered evaluation pipelines to benchmark LLMs for latency, throughput, and quality before enterprise integration.",
        "Evaluated ServiceNow REST APIs and configured real-time reporting dashboards to visualize enterprise application data.",
      ],
    },
    {
      role: "Associate Engineer",
      company: "Unisys",
      date: "Mar 2022 – Jun 2024",
      logo: UnisysLogo,
      bullets: [
        "Developed a .NET MAUI template to auto-generate MVVM boilerplate from Open API specifications, reducing development time by 50%.",
        "Optimized microservices architecture to integrate Active Directory, strengthening security and access control.",
        "Built Jenkins CI/CD pipelines with automated SonarQube quality checks, improving deployment speed by 30%.",
        "Automated application environment setup via a custom .NET CLI and Pester tests, reducing setup time by 40%.",
        "Enhanced a WPF automation tool for Windows Updates and engineered a WiX installer to simplify deployment.",
      ],
    },
    {
      role: "Penetration Testing Intern",
      company: "Virtually Testing Foundation",
      date: "Oct 2021 – Dec 2021",
      logo: VTFLogo,
      bullets: [
        "Exploited and mitigated OWASP Top 10 vulnerabilities using hands-on labs provided and prepared Pen-testing reports.",
      ],
    },
    {
      role: "Research Intern",
      company: "Indian Institute of Science",
      date: "Sep 2021 – Oct 2021",
      logo: IIScLogo,
      bullets: [
        "Engineered the data plane of a Linux kernel-level eBPF network packet filter to regulate commercial drone traffic, optimizing driver-level privacy protocols for low-latency edge performance.",
      ],
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto h-full mt-4 md:mt-10">
      <Heading section="System Logs: Experience" />

      {/* Timeline Container */}
      <div className="relative mt-8">

        {/* The Vertical Line */}
        <div className="absolute left-1 md:left-6 top-6 bottom-0 w-[2px] bg-gradient-to-b from-sky-400 to-transparent dark:from-sciCyan dark:to-transparent opacity-50"></div>

        {/* Experience Items Mapping */}
        <div className="flex flex-col">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} exp={exp} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
}


function Heading(props) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="w-full"
    >
      <h1 className="flex items-center font-fira font-bold text-2xl md:text-3xl text-slate-900 dark:text-white mb-6">
        <span className="text-sky-500 dark:text-sciCyan mr-3 opacity-80">&gt;</span> 
        {props.section}
        <div className="ml-5 h-[1px] flex-1 bg-gradient-to-r from-sky-500/50 to-transparent dark:from-sciCyan/50 dark:to-transparent"></div>
      </h1>
    </motion.div>
  );
}
