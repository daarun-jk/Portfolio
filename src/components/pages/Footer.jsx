// import logo from "../../assets/img/logo.png";
import { ReactComponent as Github } from "../../assets/svg/Github.svg";
import { ReactComponent as Linkedin } from "../../assets/svg/Linkedin.svg";


export default function Footer(props) {
  // Automatically gets the current year so you never have to update it
  const currentYear = new Date().getFullYear(); 

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



// export default function Footer(props) {
//   return (
//     <div className="flex flex-col text-black font-fira border-t-[1px] border-gray px-10 md:px-32">
//       <div className="flex justify-between mt-10 align-center">
//         <div className="flex flex-col ">
//           <div className="flex flex-col md:flex-row text-left text-black">
//             <div>
//               {/* <img
//                 src={logo}
//                 alt="personal portfolio logo"
//                 className="w-[35px] mr-[10px]"
//               /> */}
//             </div>
//             {/* <div className="text-2xl font-bold">{props.name} </div> */}
//             {/* <div className="mt-2 md:ml-10 text-base text-center text-black"> */}
//             <div className="mt-10 text-base text-center text-black">
//               <a href={"mailto:" + props.mail}>{props.mail}</a>
//             </div>
//           </div>
//           {/* <div className="mt-3 text-base font-bold">Software Engineer</div> */}
//         </div>
//         <div className="flex flex-col">
//           <div className="flex justify-center mb-3 text-2xl font-bold">
//             Social
//           </div>
//           <div className="flex flex-row justify-between">
//             <a target="_blank" rel="noopener noreferrer" href={props.github}>
//               <Github className="w-5 h-5 transition duration-500 ease-in-out fill-black hover:fill-sky-500" />
//             </a>
//             <a target="_blank" rel="noopener noreferrer" href={props.linkedin}>
//               <Linkedin className="w-5 h-5 transition duration-500 ease-in-out fill-black hover:fill-sky-500" />
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="mt-10 mb-8 text-base text-center text-black"></div>
//     </div>
//   );
// }
