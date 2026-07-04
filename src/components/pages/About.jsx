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


function Button(props) {
  return (
    <div className="absolute flex">
      <div className="px-3 py-1 text-base font-medium text-white transition duration-300 ease-in bg-black border rounded-lg border- font-fira hover:bg-transparent hover:cursor-pointer">
        {props.title}
      </div>
      <div className="absolute left-0 px-3 py-1 text-base font-medium text-white border rounded-lg bg-gradient-to-r from-sky-500 to-gray border-sky-500 font-fira -z-10">
        {props.title}
      </div>
    </div>
  );
}
