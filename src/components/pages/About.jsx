import Button from "../parts/Button";
// import Lottie from "lottie-react";
// import Animation from "../../assets/img/animation.json";
import { useEffect, useState } from 'react'
// import AnimatedLetters from '../AnimatedLetters'
import DaarunImage from "../../assets/img/Daarun2.png";


export default function About() {
  return (
    <div className="flex flex-col mb-0 pt-10">
      <div className="flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side: Greeting & About Text */}
        <div className="flex flex-col flex-1 py-5 pr-0 md:pr-10">
          <h1 className="text-[45px] font-semibold text-black dark:text-white font-poppins leading-tight">
            Hi, I'm Daarun.
          </h1>
          
          {/* About Section Text */}
          <div className="text-black dark:text-gray-300 py-6 max-w-2xl text-[16px] leading-relaxed">
            <p className="mb-4">
              I'm a Software Developer who doesn't just write code, but looks for interesting problems to solve. 
            </p>
            <p>
              My engineering style is heavily influenced by cybersecurity and systems programming, meaning I genuinely enjoy the messy process of trial, error, and figuring things out.
            </p>
          </div>

          {/* Resume Button */}
          <div className="py-4">
            <a 
              href="https://drive.google.com/file/d/1-2VUMp07B_-ygkMPuYIsT6WhMSYXT0pP/view?usp=sharing" 
              target="_blank" 
              rel="noreferrer"
            >
              <Button title={"Resume"} />
            </a>
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <div className="flex flex-col flex-1 items-center md:items-end w-full mt-10 md:mt-0">
          <img
            src={DaarunImage}
            alt="Daarun's Profile"
            className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover shadow-2xl"
          />
        </div>
        
      </div>
    </div>
  );
}





// export default function Hero(props) {
//   const [letterClass, setLetterClass] = useState('text-animate')

//   const nameArray = ['H', 'i', '!']
//   const jobArray = [ 'I',' ','am',' ','Daarun'] 
//   const job = 
//   [
//     'A Software',
//     '  ',
//     'Engineer',
//   ]

//   useEffect(() => {
//     setTimeout(() => {
//       setLetterClass('text-animate-hover')
//     }, 400)
//   }, [])
//   return (
//     <div className="flex flex-col mb-0">
//       <div className="flex flex-col md:flex-row items-center">
//         <div className="flex flex-col flex-1 py-5">
//           <div className="py-5 text-[45px] font-semibold text-black dark:text-white bg-clip-text bg-gradient-to-r from-sky-500 to-gray font-poppins">
//           <AnimatedLetters
//               letterClass={letterClass}
//               strArray={nameArray}
//               idx={15}
//             /><br></br>
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-black dark:from-gray-400 dark:to-white">
//             <AnimatedLetters
//               letterClass={letterClass}
//               strArray={jobArray}
//               idx={22}
//             /><br></br>
//             </span>
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-gray ">
//             <AnimatedLetters
//               letterClass={letterClass}
//               strArray={job}
//               idx={22}
//             />
//             </span>
//           </div>
//           <div className="py-[50px]">
//             <a href="https://drive.google.com/file/d/1_7Z5VrSqmTaTcPijrE1D7rSYZnX_-Nw2/view?usp=sharing">
//               <Button title={"Resume"} />
//             </a>
//           </div>
//         </div>

//         <div className="flex flex-col flex-1 md:pl-[220px] w-48 md: h-max md:w-48">
//           {/* <Lottie animationData={Animation}  /> */}
//           <img
//             src={DaarunImage}
//             alt="my profile"
//             className="rounded-full mx-auto md:w-48 md:w-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
