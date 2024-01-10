import ExperienceCard from "../parts/ExperienceCard";
import ExperienceDescription from "../parts/ExperienceDescription";

export default function Experiences(props) {
	return props.float === "right" ? (
		<div className="relative grid items-center gap-2.5 grid-cols-12 mb-24">
			<div className="h-full col-start-1 col-end-8 row-start-1">
				<ExperienceCard image={props.image} />
			</div>
			<div className="block col-start-7 col-end-13 row-start-1 h-fit">
				<ExperienceDescription
					title={props.title}
					description={props.description}
					description1={props.description1}
					company={props.company}
					// link={props.link}
					// github={props.github}
					float={props.float}
				/>
			</div>
		</div>
	) : (
		<div className="relative grid items-center gap-2.5 grid-cols-12	mb-24">
			<div className="h-full col-start-6 col-end-13 row-start-1">
				<ExperienceCard image={props.image} />
			</div>
			<div className="block col-start-1 col-end-7 row-start-1 h-fit">
				<ExperienceDescription
					title={props.title}
					description={props.description}
					description1={props.description1}
					company={props.company}
					// link={props.link}
					// github={props.github}
					float={props.float}
				/>
			</div>
		</div>
	);
}
