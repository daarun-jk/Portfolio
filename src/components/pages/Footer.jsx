import Github from "../../assets/svg/Github.svg?react";
import Linkedin from "../../assets/svg/Linkedin.svg?react";

export default function Footer(props) {
  // Automatically gets the current year so you never have to update it

  return (
    <footer className="w-full border-t border-slate-200 dark:border-zinc-800 bg-white dark:bg-black px-10 md:px-32 py-10 transition-colors duration-300">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Left Side: Name and Email */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold text-black dark:text-white font-poppins">
            {props.name}
          </h2>
          <a
            href={`mailto:${props.mail}`}
            className="mt-2 text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors text-base font-medium"
          >
            {props.mail}
          </a>
        </div>

        {/* Right Side: Socials */}
        <div className="flex flex-col items-center md:items-end">
          <div className="text-lg font-bold text-black dark:text-white mb-3">
            Connect
          </div>
          <div className="flex gap-6">
            <a target="_blank" rel="noopener noreferrer" href={props.github} aria-label="GitHub">
              {/* Added dark:fill-slate-300 so icons show up on black backgrounds */}
              <Github className="w-6 h-6 fill-slate-700 dark:fill-slate-300 hover:fill-sky-500 dark:hover:fill-sky-400 transition-colors duration-300" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href={props.linkedin} aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 fill-slate-700 dark:fill-slate-300 hover:fill-sky-500 dark:hover:fill-sky-400 transition-colors duration-300" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom: Copyright Notice */}
      <div className="mt-10 pt-6 border-t border-slate-100 dark:border-zinc-800/50 text-center text-sm text-slate-500 dark:text-slate-500">
        Designed & Built by {props.name}.
      </div>
    </footer>
  );
}
