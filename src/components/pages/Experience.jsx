import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Importing dropdown arrows
import UTSLogo from "../../assets/img/UTS1.png";
import UnisysLogo from "../../assets/img/Unisys5.png";
import VTFLogo from "../../assets/img/VTF3.png";
import IIScLogo from "../../assets/img/IISc2.png";


// Sub-component to handle the open/close state for each individual job
const ExperienceItem = ({ exp, index }) => {
  // By default, the first job (index 0) will be open, and the rest closed
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <div className="relative pl-8 md:pl-20 mb-8">
      {/* Timeline Dot */}
      <div className="absolute left-[-5px] md:left-[27px] top-8 h-3 w-3 bg-sky-500 rounded-full ring-4 ring-white dark:ring-black z-10"></div>

      {/* Clickable Header Box */}
      <div
        className="flex flex-col md:flex-row md:items-center justify-between cursor-pointer bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-sky-300 dark:hover:border-sky-700 transition-colors rounded-xl p-4 md:p-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-5">
          {/* Company Logo Box */}
          <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center p-1.5 shadow-sm shrink-0 overflow-hidden">
            {exp.logo ? (
              <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-contain" />
            ) : (
              /* Fallback if logo is missing */
              <div className="w-full h-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400 rounded">
                LOGO
              </div>
            )}
          </div>

          <div>
            <h3 className="text-xl font-bold text-black dark:text-white font-poppins">
              {exp.role}
            </h3>
            <h4 className="text-md font-medium text-sky-600 dark:text-sky-400 mt-1">
              {exp.company}
            </h4>
          </div>
        </div>

        {/* Right Side: Date & Chevron Icon */}
        <div className="flex items-center justify-between mt-4 md:mt-0 gap-4 pl-14 md:pl-0">
          <div className="px-3 py-1 bg-slate-200 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 text-sm font-semibold rounded-full border border-slate-300 dark:border-zinc-700">
            {exp.date}
          </div>
          <div className="text-slate-400 dark:text-slate-500 hidden md:block">
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        </div>
      </div>

      {/* Expandable Bullet Points (Smooth CSS Grid Animation) */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden">
          <ul className="list-disc ml-14 md:ml-28 pr-4 pb-4 space-y-3 text-slate-700 dark:text-slate-300">
            {exp.bullets.map((bullet, i) => (
              <li key={i} className="leading-relaxed text-[15px]">
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
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
    <div className="w-full mb-24">
      <Heading section="Experience" />

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto mt-10">

        {/* The Vertical Line */}
        <div className="absolute left-0 md:left-8 top-8 bottom-0 w-[2px] bg-sky-200 dark:bg-zinc-800"></div>

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
    <div className="w-full">
      <h1 className="flex items-center before:content-['#'] before:text-sky-500 font-fira font-medium text-3xl text-black dark:text-white after:content-[''] after:block after:relative after:top-[2px] after:w-80 after:h-[1.5px] after:bg-sky-500 after:ml-5 mb-10">
        {props.section}
      </h1>
    </div>
  );
}
