import UTDLogo from "../../assets/img/UTD4.png";
import NMITLogo from "../../assets/img/NMIT5.png";
import { motion } from "framer-motion";

export default function Education() {
  const educations = [
    {
      title: "The University of Texas at Dallas (UTD)",
      year: "Aug 2024 - May 2026",
      description: "Master of Science (M.S), Computer Science",
      grade: "GPA: 3.86 / 4.0",
      logo: UTDLogo,
    },
    {
      title: "Nitte Meenakshi Institute of Technology (NMIT)",
      year: "Aug 2018 - July 2022",
      description: "Bachelor of Engineering (B.E), Computer Science and Engineering",
      affiliation: "Affiliated to Visvesvaraya Technological University (VTU)",
      grade: "GPA: 9.19 / 10",
      logo: NMITLogo,
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto h-full mt-4 md:mt-10">
      <Heading section="Training Data (Education)" />

      <div className="relative mt-8">

        {/* The Left Vertical Line */}
        <div className="absolute left-6 top-6 bottom-0 w-[2px] bg-gradient-to-b from-sky-400 to-transparent dark:from-sciCyan dark:to-transparent opacity-50"></div>

        <div className="flex flex-col gap-6">
          {educations.map((edu, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative flex items-start w-full group pl-16 md:pl-20"
              >

                {/* Left Logo Node */}
                <div className="absolute left-0 flex items-center justify-center w-12 h-12 bg-white/80 dark:bg-black backdrop-blur-md dark:backdrop-blur-none rounded-lg border border-slate-200 dark:border-sciCyan shadow-sm z-10 p-1 group-hover:border-sky-400 dark:group-hover:border-sciCyan transition-colors duration-300 mt-2">
                  {edu.logo ? (
                    <img src={edu.logo} alt={`${edu.title} logo`} className="w-full h-full object-contain" />
                  ) : (
                    <div className="w-full h-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400 rounded-lg">
                      LOGO
                    </div>
                  )}
                </div>

                {/* Content Box */}
                <div className="w-full">
                  <div className="bg-white/50 dark:bg-black backdrop-blur-md dark:backdrop-blur-none border border-slate-200/50 dark:border-sciCyan p-5 rounded-xl group-hover:border-sky-400 dark:group-hover:border-sciCyan transition-colors shadow-sm flex flex-col md:flex-row justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white font-poppins leading-tight group-hover:text-sky-600 dark:group-hover:text-sciCyan transition-colors">
                        {edu.title}
                      </h3>

                      <h4 className="text-[15px] font-semibold text-sky-600 dark:text-sky-400 mt-1 font-fira">
                        {edu.description}
                      </h4>

                      {edu.affiliation && (
                        <p className="text-[13px] text-slate-600 dark:text-white mt-1 font-medium font-fira">
                          {edu.affiliation}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col items-start md:items-end justify-start shrink-0 gap-2">
                      <div className="text-slate-500 dark:text-white text-[12px] font-fira tracking-wide">
                        <span className="text-sky-500 dark:text-sciCyan">[{edu.year}]</span>
                      </div>
                      
                      {/* Clean GPA Badge */}
                      <div className="px-3 py-1 bg-sky-50 dark:bg-sciCyan/10 border border-sky-200 dark:border-sciCyan rounded text-sky-700 dark:text-sciCyan font-bold shadow-sm font-fira text-[12px]">
                        {edu.grade}
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
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
