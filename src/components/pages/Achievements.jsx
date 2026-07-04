import { FaTrophy, FaMedal, FaBookOpen } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Achievements() {
  const achievements = [
    {
      award: "1st Place Winner",
      event: "NMIT Hacks",
      description: "Built “DROVEROT”, an autonomous military surveillance drone ecosystem with real-time facial recognition and tracking capabilities.",
      icon: <FaTrophy className="w-6 h-6 md:w-8 md:h-8 text-amber-500 dark:text-amber-400" />,
      link: null,
    },
    {
      award: "Journal Publication",
      event: "IJSDR",
      description: "Published technical research paper titled “Blockchain-Based Decentralized Energy Trading Using Micro-Grids”.",
      icon: <FaBookOpen className="w-6 h-6 md:w-8 md:h-8 text-emerald-500 dark:text-emerald-400" />,
      link: "https://ijsdr.org/viewpaperforall.php?paper=IJSDR2207008",
      linkColor: "text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
    },
    {
      award: "Best Maps API Award",
      event: "Hackbout Hackathon",
      description: "Recognized for “Open Eyes”, a cloud-native assistive tech solution providing real-time environment descriptions for the visually impaired.",
      icon: <FaMedal className="w-6 h-6 md:w-8 md:h-8 text-sky-500 dark:text-sky-400" />,
      link: null,
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto h-full mt-4 md:mt-10">
      <Heading section="Clearance Logs: Achievements" />

      {/* Centered, constrained width for a premium reading experience */}
      <div className="flex flex-col mt-8">

        {achievements.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            key={index}
            className="group flex flex-col md:flex-row items-start gap-5 md:gap-8 py-6 md:py-8 border-b border-slate-200/50 dark:border-sciCyan last:border-0 relative overflow-hidden"
          >
            {/* Glowing left accent on hover */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 to-transparent dark:from-sciCyan dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Left: Minimal Floating Icon */}
            <div className="mt-1 shrink-0 z-10 pl-4 md:pl-5">
              <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white/50 dark:bg-black backdrop-blur-md dark:backdrop-blur-none rounded-xl border border-slate-200 dark:border-sciCyan shadow-[0_0_15px_rgba(2,132,199,0.1)] dark:shadow-[0_0_15px_rgba(0,255,204,0.1)] transition-transform duration-500 group-hover:scale-110 group-hover:border-sky-400 dark:group-hover:border-sciCyan">
                {item.icon}
              </div>
            </div>

            {/* Right: Raw Text Content */}
            <div className="flex-1 z-10 pr-4 md:pr-0 w-full pl-4 md:pl-0">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 md:gap-4 mb-2 md:mb-3">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white font-poppins leading-tight group-hover:text-sky-600 dark:group-hover:text-sciCyan transition-colors">
                  {item.award}
                </h3>
                <h4 className="text-[14px] md:text-[15px] font-semibold text-sky-600 dark:text-sky-400 tracking-wide font-fira flex items-center gap-1.5 md:gap-2">
                  <span className="opacity-50 text-xs md:text-sm">@</span> {item.event}
                </h4>
              </div>

              <p className="text-slate-600 dark:text-white text-[13px] md:text-[14px] leading-relaxed font-fira">
                {item.description}
              </p>

              {/* Minimal Link */}
              {item.link && (
                <div className="mt-3 md:mt-4">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-[13px] md:text-[14px] font-bold tracking-wide transition-colors ${item.linkColor}`}
                  >
                    Read Publication <FiExternalLink size={16} />
                  </a>
                </div>
              )}
            </div>

          </motion.div>
        ))}

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
