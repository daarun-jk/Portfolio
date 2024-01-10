// import logo from "../../assets/img/logo.png";
import { ReactComponent as Github } from "../../assets/svg/Github.svg";
import { ReactComponent as Linkedin } from "../../assets/svg/Linkedin.svg";

export default function Footer(props) {
  return (
    <div className="flex flex-col text-black font-fira border-t-[1px] border-gray px-10 md:px-32">
      <div className="flex justify-between mt-10 align-center">
        <div className="flex flex-col ">
          <div className="flex flex-col md:flex-row text-left text-black">
            <div>
              {/* <img
                src={logo}
                alt="personal portfolio logo"
                className="w-[35px] mr-[10px]"
              /> */}
            </div>
            {/* <div className="text-2xl font-bold">{props.name} </div> */}
            {/* <div className="mt-2 md:ml-10 text-base text-center text-black"> */}
            <div className="mt-10 text-base text-center text-black">
              <a href={"mailto:" + props.mail}>{props.mail}</a>
            </div>
          </div>
          {/* <div className="mt-3 text-base font-bold">Software Engineer</div> */}
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center mb-3 text-2xl font-bold">
            Social
          </div>
          <div className="flex flex-row justify-between">
            <a target="_blank" rel="noopener noreferrer" href={props.github}>
              <Github className="w-5 h-5 transition duration-500 ease-in-out fill-black hover:fill-sky-500" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href={props.linkedin}>
              <Linkedin className="w-5 h-5 transition duration-500 ease-in-out fill-black hover:fill-sky-500" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-8 text-base text-center text-black"></div>
    </div>
  );
}
