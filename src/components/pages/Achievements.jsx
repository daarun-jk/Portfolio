import Heading from "../parts/Heading";
import { FaTrophy, FaMedal, FaBookOpen } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function Achievements() {
  const achievements = [
    {
      award: "1st Place Winner",
      event: "NMIT Hacks",
      description: "Built “DROVEROT”, an autonomous military surveillance drone ecosystem with real-time facial recognition and tracking capabilities.",
      icon: <FaTrophy className="w-8 h-8 text-amber-500 dark:text-amber-400" />,
      link: null,
    },
    {
      award: "Journal Publication",
      event: "IJSDR",
      description: "Published technical research paper titled “Blockchain-Based Decentralized Energy Trading Using Micro-Grids”.",
      icon: <FaBookOpen className="w-8 h-8 text-emerald-500 dark:text-emerald-400" />,
      link: "https://ijsdr.org/viewpaperforall.php?paper=IJSDR2207008",
      linkColor: "text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
    },
    {
      award: "Best Maps API Award",
      event: "Hackbout Hackathon",
      description: "Recognized for “Open Eyes”, a cloud-native assistive tech solution providing real-time environment descriptions for the visually impaired.",
      icon: <FaMedal className="w-8 h-8 text-sky-500 dark:text-sky-400" />,
      link: null,
    },
  ];

  return (
    <div className="w-full mb-24">
      <Heading section="Achievements" />

      {/* Centered, constrained width for a premium reading experience */}
      <div className="flex flex-col max-w-4xl mx-auto mt-12">
        
        {achievements.map((item, index) => (
          <div 
            key={index} 
            className="group flex flex-col md:flex-row items-start gap-6 md:gap-10 py-10 border-b border-slate-200 dark:border-zinc-800 last:border-0"
          >
            
            {/* Left: Minimal Floating Icon */}
            <div className="mt-1 shrink-0">
              <div className="flex items-center justify-center w-16 h-16 bg-slate-50 dark:bg-zinc-900 rounded-full border border-slate-100 dark:border-zinc-800 shadow-sm transition-transform duration-500 group-hover:scale-110">
                {item.icon}
              </div>
            </div>

            {/* Right: Raw Text Content */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 md:gap-4 mb-3">
                {/* Title adjusted to text-xl md:text-2xl */}
                <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white font-poppins leading-tight">
                  {item.award}
                </h3>
                {/* Event adjusted to text-[17px] */}
                <h4 className="text-[17px] font-semibold text-sky-600 dark:text-sky-400 tracking-wide mt-1 md:mt-0">
                  {item.event}
                </h4>
              </div>

              {/* Description adjusted to text-[15px] */}
              <p className="text-slate-600 dark:text-slate-300 text-[15px] leading-relaxed">
                {item.description}
              </p>

              {/* Minimal Link */}
              {item.link && (
                <div className="mt-4">
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-[15px] font-bold tracking-wide transition-colors ${item.linkColor}`}
                  >
                    Read Publication <FiExternalLink size={18} />
                  </a>
                </div>
              )}
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}