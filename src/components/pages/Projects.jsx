import { useState } from "react";
import Project from "../molecules/Project";
import Heading from "../parts/Heading";
import { FaGithub } from "react-icons/fa"; // Importing GitHub icon
import { FiExternalLink } from "react-icons/fi"; // Optional: icon for live links


export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Streamlined, powerful categories
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
    <div className="w-full mb-24 min-h-[500px]">
      <Heading section="Projects" />

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mt-10 mb-8 justify-center md:justify-start">
        {filterList.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-full text-[14px] font-semibold transition-all duration-300 border ${
              activeFilter === filter
                ? "bg-sky-500 text-white border-sky-500 shadow-md"
                : "bg-transparent text-slate-600 dark:text-zinc-400 border-slate-300 dark:border-zinc-700 hover:border-sky-400 hover:text-sky-500 dark:hover:text-sky-400"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* CSS Grid for the Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div 
            key={index} 
            className="group flex flex-col justify-between bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-sky-300 dark:hover:border-sky-700 h-full"
          >
            <div>
              {/* Header: Title and Icons */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-black dark:text-white font-poppins group-hover:text-sky-500 transition-colors pr-2">
                  {project.title}
                </h3>
                
                {/* Links Section */}
                <div className="flex gap-3 shrink-0">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-black dark:text-slate-400 dark:hover:text-white transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub size={22} />
                    </a>
                  )}
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-sky-500 dark:text-slate-400 transition-colors"
                      aria-label="Live Project Link"
                    >
                      <FiExternalLink size={22} />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-300 text-[15px] leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            {/* Footer: Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-200 dark:border-zinc-800">
              {project.techStack.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-2.5 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-[11px] font-bold uppercase tracking-wider rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


// export default function Projects() {
// 	return (
// 		<div className="mb-24">
// 			<Heading section="projects" />
// 			<Project
// 				float="right"
// 				title="Energy dApp"
// 				image="bg-project12"
// 				description="Developed a decentralized application (dApp) for energy trading between producers and consumers and simulated the same with microgrids concept at a physical level."
// 				languages=" NodeJS, Solidity, MongoDB"
// 				github={"https://github.com/daarun-jk/energy-dApp"}
// 			/>
// 			<Project
// 				float="left"
// 				title="Crypto SMS"
// 				image="bg-project13"
// 				description="Developed an Android application for encrypted SMS service using the AES-128-bit algorithm for encryption."
// 				languages="Java, MongoDB"
// 				github={"https://github.com/daarun-jk/crypto-sms"}
				
// 			/>
// 			<Project
// 				float="right"
// 				title="Open Eyes"
// 				image="bg-project14"
// 				description="Built a smart cap and a mobile application for the visually impaired to describe the environment using text-to-speech."
// 				languages="Node JS, Flutter, Azure"
// 				github={"https://github.com/daarun-jk/open-eyes"}
// 			/>
// 			<Project
// 				float="left"
// 				title="DROVEROT  "
// 				image="bg-project15"
// 				description="Built a drone and an autonomous rover with a robotic arm for military surveillance with facial recognition"
// 				languages="Angular JS, Python, MongoDB"
// 				github={"https://github.com/daarun-jk/droverot"}
// 			/>
// 		</div>
// 	);
// }
