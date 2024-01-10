import EducationCard from "../parts/EducationCard";
import EducationDescription from "../parts/EducationDescription";

export default function Educations(props) {
	return props.float === "right" ? (
		<div className="relative grid items-center gap-2.5 grid-cols-2 mb-24">
			<div className="h-full col-start-1 col-end-8 row-start-1">
				<EducationCard image={props.image} />
			</div>
			<div className="block col-start-7 col-end-13 row-start-1 h-fit">
				<EducationDescription
					title={props.title}
					description={props.description}
					grade={props.grade}
					float={props.float}
				/>
			</div>
		</div>
	) : (
		<div className="relative grid items-center gap-2.5 grid-cols-12 mb-24">
			<div className="h-full col-start-6 col-end-13 row-start-1">
				<EducationCard image={props.image} />
			</div>
			<div className="block col-start-1 col-end-7 row-start-1 h-fit">
				<EducationDescription
					title={props.title}
					description={props.description}
					grade={props.grade}
					float={props.float}
				/>
			</div>
		</div>
	);
}
