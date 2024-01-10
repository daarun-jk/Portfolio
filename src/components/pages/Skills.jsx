import Container from "../molecules/Container";
import Heading from "../parts/Heading";

export default function Skills(props) {
	return (
		<div>
			<Heading section="skills" />
			<div className="flex flex-col items-center justify-between md:flex-row ">
				<Container containerTitle="Languages" elements={props.languages} />
				<Container
					containerTitle="Frameworks"
					variant="center"
					elements={props.frameworks}
				/>
				<Container containerTitle="Tools" elements={props.tools} />
			</div>
		</div>
	);
}
