import Heading from "../parts/Heading";
// import HeroImage from "../../assets/img/hero.jpeg";
import Lottie from "lottie-react";
import Animation from "../../assets/img/animation.json";

export default function About(props) {
  return (
    <div>
      <Heading section={"About"} />
      <div className="flex flex-col md:flex-row l">

      <div className="flex flex-col items-left justify-left h-full px-4 md:flex-row">
        <div className="flex flex-col justify-left h-full">
          <h2 className="text-4xl sm:text-2xl font-bold text-black">
            Software Engineer
          </h2>
          <p className="text-black py-4 max-w-md">
		  {props.firstParagraph} {props.secondParagraph}
          </p>

        </div>

        <div className="flex flex-col flex-1 md:pl-[220px] w-18 md: h-max md:w-18">
          <Lottie animationData={Animation}  />
        </div>
      </div>
    </div>
  </div>);
};