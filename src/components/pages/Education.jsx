import UTDLogo from "../../assets/img/UTD4.png";
import NMITLogo from "../../assets/img/NMIT5.png";

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
      affiliation: "Affiliated to  Visvesvaraya Technological University (VTU)",
      grade: "GPA: 9.19 / 10",
      logo: NMITLogo,
    },
  ];

  return (
    <div className="w-full mb-24 overflow-hidden">
      <Heading section="Education" />

      <div className="relative max-w-5xl mx-auto mt-14">

        {/* The Central Vertical Line */}
        {/* On mobile, it stays on the left (left-8). On desktop, it centers (left-1/2) */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-sky-200 dark:bg-zinc-800 md:-translate-x-1/2"></div>

        <div className="flex flex-col gap-12 md:gap-0">
          {educations.map((edu, index) => {
            // Logic to alternate sides: Even indexes on the left, Odd on the right
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className="relative flex flex-col md:flex-row items-center justify-between md:mb-16 w-full"
              >

                {/* Center Logo Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 bg-white dark:bg-zinc-900 rounded-full border-4 border-slate-50 dark:border-zinc-800 shadow-md z-10 p-2">
                  {edu.logo ? (
                    <img src={edu.logo} alt={`${edu.title} logo`} className="w-full h-full object-contain" />
                  ) : (
                    <div className="w-full h-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400 rounded-full">
                      LOGO
                    </div>
                  )}
                </div>

                {/* Content Box */}
                {/* Dynamically pushes left or right on desktop, but stays left on mobile */}
                <div
                  className={`w-full md:w-[45%] pl-24 md:pl-0 pt-2 md:pt-0 
                  ${isLeft ? "md:mr-auto md:pr-12 md:text-right" : "md:ml-auto md:pl-12 md:text-left"}`}
                >
                  <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white font-poppins leading-tight">
                    {edu.title}
                  </h3>

                  <h4 className="text-[17px] font-semibold text-sky-600 dark:text-sky-400 mt-2">
                    {edu.description}
                  </h4>

                  {edu.affiliation && (
                    <p className="text-sm text-slate-600 dark:text-gray-400 mt-0.5 font-medium">
                      {edu.affiliation}
                    </p>
                  )}

                  <div className="mt-1 text-slate-500 dark:text-slate-400 text-sm font-semibold tracking-wide">
                    {edu.year}
                  </div>

                  {/* Clean GPA Badge */}
                  <div className="mt-4">
                    <span className="inline-block px-4 py-1.5 bg-slate-50 dark:bg-zinc-800/50 border border-slate-200 dark:border-zinc-700 rounded-lg text-slate-700 dark:text-slate-300 font-medium shadow-sm">
                      {edu.grade}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
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
