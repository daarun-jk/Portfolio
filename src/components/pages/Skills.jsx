import { motion } from "framer-motion";
import { FaTerminal } from "react-icons/fa";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming & Scripting",
      skills: ["Python", "C#", "Java", "C++", "JavaScript", "TypeScript", "SQL", "Bash", "PowerShell"],
    },
    {
      title: "Frameworks & Libraries",
      skills: [".NET 8 / Core", "Node.js", "React", "Spark", "Kafka"],
    },
    {
      title: "Cloud & Databases",
      skills: ["Azure", "AWS", "SQL Server", "MongoDB", "Elasticsearch"],
    },
    {
      title: "DevOps & Core Engineering",
      skills: ["CI/CD (Jenkins)", "Docker", "Kubernetes", "Microservices", "eBPF"],
    },
  ];

  const certifications = [
    "ServiceNow Certified System Administrator (CSA)",
    "Certified Ethical Hacker-Practical (EC-Council)",
  ];

  return (
    <div className="w-full h-full max-w-6xl mx-auto mt-4 md:mt-10">
      <Heading section="Loaded System Modules" />

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {skillCategories.map((category, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            key={index}
            className="bg-white/50 dark:bg-black backdrop-blur-md dark:backdrop-blur-none border border-slate-200/50 dark:border-sciCyan rounded-xl p-5 shadow-md hover:border-sky-400 dark:hover:border-sciCyan transition-all duration-300 group"
          >
            {/* Category Title */}
            <h3 className="text-[17px] font-bold text-slate-900 dark:text-white mb-5 font-fira flex items-center gap-2">
              <FaTerminal className="text-sky-500 dark:text-sciCyan text-sm" />
              {category.title}
            </h3>

            {/* Skill Nodes Grid */}
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                  key={skillIndex}
                  className="px-3 py-1.5 bg-sky-50 dark:bg-black border border-sky-200 dark:border-sciCyan text-sky-700 dark:text-sciCyan text-[13px] font-semibold font-fira rounded hover:bg-sky-100 dark:hover:bg-sciCyan/10 hover:border-sky-400 dark:hover:border-sciCyan hover:shadow-[0_0_10px_rgba(0,255,204,0.3)] transition-all cursor-default"
                >
                  <span className="opacity-50 mr-1">#</span>{skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Certifications Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-r from-sky-100 to-slate-50 dark:from-sciCyan/20 dark:to-zinc-900/50 backdrop-blur-md dark:backdrop-blur-none border border-sky-200 dark:border-sciCyan rounded-xl p-6 shadow-lg md:col-span-2 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex-1">
            <h3 className="text-[17px] font-bold text-slate-900 dark:text-white font-fira flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Security Clearances & Certifications
            </h3>
            <p className="text-[13px] text-slate-600 dark:text-white font-fira">Verified credentials loaded into primary memory.</p>
          </div>
          <div className="flex flex-col gap-3 w-full md:w-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-white/80 dark:bg-black border-l-4 border-l-sky-500 dark:border-l-sciCyan text-slate-800 dark:text-white text-[13px] font-semibold font-fira rounded-r-lg shadow-sm"
              >
                {cert}
              </div>
            ))}
          </div>
        </motion.div>
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
