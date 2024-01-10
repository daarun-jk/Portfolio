// import { ReactComponent as Github } from "../../assets/svg/Github.svg";
// import { ReactComponent as ExternalLink } from "../../assets/svg/ExternalLink.svg";

export default function ExperienceDescription(props) {
	return props.float === "right" ? (
		<div className={`w-full font-fira text-black text-right float-right`}>
			{/* <p className="text-xs text-sky-500">Featured Project</p> */}
			<h1 className="text-2xl font-bold font-poppins">{props.title}</h1>
			<p className="mt-1 text-sm">{props.company}</p>
			<div className="mt-4 p-0 font-medium bg-[#ffffff] font-poppins h-fit">
				{props.description}
			</div>
			<div className="mt-4 p-0 font-medium bg-[#ffffff] font-poppins h-fit">
				{props.description1}
			</div>
			{/* <a target="_blank" rel="noopener noreferrer" href={props.link}>
				<ExternalLink className="mt-2.5 ml-4 float-right h-5 w-5 transition duration-500 ease-in-out fill-black hover:fill-sky-500" />
			</a>
			<a target="_blank" rel="noopener noreferrer" href={props.github}>
				<Github className="mt-2.5 float-right h-5 w-5 transition duration-500 ease-in-out fill-black hover:fill-sky-500" />
			</a> */}
		</div>
	) : (
		<div className={`w-full font-fira text-black float-left text-left`}>
			{/* <p className="text-xs text-sky-500">Featured Project</p> */}
			<h1 className="text-2xl font-bold font-poppins">{props.title}</h1>
			<p className="mt-1 text-sm">{props.company}</p>
			<div className="mt-4 p-0 font-medium bg-[#ffffff] font-poppins h-fit">
				{props.description}
			</div>
			<div className="mt-4 p-0 font-medium bg-[#ffffff] font-poppins h-fit">
				{props.description1}
			</div>
			{/* <a target="_blank" rel="noopener noreferrer" href={props.github}>
				<Github className="mt-2.5 mr-4 float-left h-5 w-5 transition duration-500 ease-in-out fill-black hover:fill-sky-500" />
			</a>
			<a target="_blank" rel="noopener noreferrer" href={props.link}>
				<ExternalLink className="mt-2.5 float-left h-5 w-5 transition duration-500 ease-in-out fill-black hover:fill-sky-500" />
			</a> */}
		</div>
	);
}
