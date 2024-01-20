import Educations from "../molecules/Educations";
import Heading from "../parts/Heading";

export default function Experience() {
	return (
		<div className="mb-24">
			<Heading section="education" />
			<Educations
				float="right"
				title="Nitte Meenakshi Institute of Technology"
				year="(2018-2022)"
				image="bg-project11"
				description="Bachelor of Engineering | Computer Science and Engineering"
				grade="CGPA: 9.19"
			/>

			<Educations
				float="left"
				title="Kendriya Vidyalla IISc"
				year="(2017-2018)"
				image="bg-project9"
				description="XII Grade"
				grade="95%"
			/>
		</div>
	);
}
