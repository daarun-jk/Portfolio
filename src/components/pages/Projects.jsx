import { useState } from "react";
import { FaGithub } from "react-icons/fa"; // Importing GitHub icon
import { FiExternalLink } from "react-icons/fi"; // Optional: icon for live links
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filterList = [
    "All",
    "Full-Stack & Mobile",
    "AI & Data",
    "Cybersecurity",
    "Cloud Architecture",
    "Systems and Core Engineering"
  ];

  const projects = [
    {
      title: "Android Malware Detection",
      categories: ["AI & Data", "Cybersecurity"],
      description: "Engineered a static analysis engine mapping IoCs to MITRE ATT&CK, processing 29,000+ app records via Azure Blob Storage. Benchmarked 8 algorithms to optimize a Logistic Regression model, achieving 93.5% threat detection accuracy.",
      techStack: ["Python", "Machine Learning", "Azure", "Static Analysis"],
      github: "https://github.com/daarun-jk",
      liveLink: null,
    },
    {
      title: "Real-Time News Analytics",
      categories: ["AI & Data", "Cloud Architecture"],
      description: "Architected a scalable streaming data pipeline using Spark and Kafka to ingest live news feeds, enabling low-latency analytics and real-time visualization of trending entities.",
      techStack: ["Databricks", "Python", "Spark", "Kafka", "Elasticsearch", "Kibana"],
      github: null,
      liveLink: null,
    },
    {
      title: "Open Eyes - Assistive Tech",
      categories: ["Full-Stack & Mobile", "Cloud Architecture", "Systems and Core Engineering"],
      description: "Designed a cloud-native assistive system for the visually impaired. Integrated Azure Vision and Speech APIs with a RESTful Node.js backend to deliver real-time environment descriptions.",
      techStack: ["Node.js", "React", "Azure", "REST APIs"],
      github: "https://github.com/daarun-jk/open-eyes",
      liveLink: null,
    },
    {
      title: "Crypto SMS - Secure Messaging",
      categories: ["Cybersecurity", "Full-Stack & Mobile"],
      description: "Built a secure Android messaging application implementing AES-128 end-to-end encryption to ensure data confidentiality and prevent unauthorized interception of communications.",
      techStack: ["Java", "Android SDK", "MongoDB", "Cryptography"],
      github: "https://github.com/daarun-jk/crypto-sms",
      liveLink: null,
    },
    {
      title: "Llama Law – GenAI Assistant",
      categories: ["AI & Data", "Full-Stack & Mobile"],
      description: "Developed a generative AI web application integrating multilingual LLMs and web scraping to simplify and explain complex government websites through an intuitive interface.",
      techStack: ["LLMs", "Streamlit", "Python"],
      github: null,
      liveLink: null,
    },
    {
      title: "Blockchain Energy Trading",
      categories: ["Cybersecurity", "Full-Stack & Mobile"],
      description: "Deployed a decentralized full-stack web app (dApp) for secure peer-to-peer energy trading. Engineered tamper-proof smart contracts to ensure immutable transaction logs and decentralized identity verification.",
      techStack: ["Node.js", "React", "Solidity", "Web3"],
      github: "https://github.com/daarun-jk/energy-dApp",
      liveLink: null,
    },
    {
      title: "DROVEROT Surveillance",
      categories: ["Cloud Architecture", "Full-Stack & Mobile", "AI & Data", "Cybersecurity", "Systems and Core Engineering"],
      description: "Engineered a low-latency military-grade surveillance prototype. Streamed real-time video and facial recognition data from a custom drone to a full-stack web dashboard via optimized WebSockets.",
      techStack: ["Node.js", "Angular", "Python", "MongoDB", "Hardware"],
      github: "https://github.com/daarun-jk/droverot",
      liveLink: null,
    },
    {
      title: "DBase Nano (CLI Database)",
      categories: ["Systems and Core Engineering"],
      description: "Architected a lightweight CLI database management system from scratch, implementing custom data structures and a query parser for DDL/DML operations.",
      techStack: ["Java", "Data Structures", "CLI"],
      github: null,
      liveLink: null,
    },
  ];

  // Filter logic
  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.categories.includes(activeFilter));

  return (
    <div className="w-full max-w-6xl mx-auto h-full mt-4 md:mt-10">
      <Heading section="Active Deployments" />

      {/* Filter Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex flex-wrap gap-2.5 mt-8 mb-6 justify-center md:justify-start"
      >
        {filterList.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-1.5 rounded-md text-[12px] md:text-[13px] font-fira font-semibold transition-all duration-300 border ${activeFilter === filter
              ? "bg-sky-500 text-white border-sky-500 shadow-[0_0_10px_rgba(2,132,199,0.5)] dark:bg-sciCyan dark:text-black dark:border-sciCyan dark:shadow-[0_0_10px_rgba(0,255,204,0.5)]"
              : "bg-white/50 dark:bg-black backdrop-blur-md dark:backdrop-blur-none text-slate-600 dark:text-white border-slate-300 dark:border-sciCyan hover:border-sky-400 dark:hover:border-sciCyan hover:text-sky-600 dark:hover:text-sciCyan"
              }`}
          >
            {filter}
          </button>
        ))}
      </motion.div>

      {/* CSS Grid for the Project Cards */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 perspective-1000">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.3 }}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 10px 30px -10px rgba(0, 255, 204, 0.2)" 
              }}
              className="group flex flex-col justify-between bg-white/60 dark:bg-black backdrop-blur-lg dark:backdrop-blur-none border border-slate-200/50 dark:border-sciCyan rounded-xl p-5 transition-colors duration-300 hover:border-sky-400 dark:hover:border-sciCyan h-full relative overflow-hidden"
            >
              {/* Glowing Top Border */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-sky-400 dark:via-sciCyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div>
                {/* Header: Title and Icons */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white font-poppins group-hover:text-sky-600 dark:group-hover:text-sciCyan transition-colors pr-2">
                    {project.title}
                  </h3>

                  {/* Links Section */}
                  <div className="flex gap-2.5 shrink-0 relative z-10">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-sky-600 dark:text-white dark:hover:text-sciCyan transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <FaGithub size={18} />
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-sky-600 dark:text-white dark:hover:text-sciCyan transition-colors"
                        aria-label="Live Project Link"
                      >
                        <FiExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 dark:text-white text-[13px] leading-relaxed mb-6 font-fira">
                  {project.description}
                </p>
              </div>

              {/* Footer: Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-200/50 dark:border-sciCyan">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-1.5 py-0.5 bg-sky-100/50 dark:bg-sciCyan/10 text-sky-700 dark:text-sciCyan text-[10px] font-bold font-fira uppercase tracking-wider rounded border border-sky-200/50 dark:border-sciCyan"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
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
