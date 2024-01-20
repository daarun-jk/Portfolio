import Project from "../molecules/Project";
import Heading from "../parts/Heading";

export default function Projects() {
	return (
		<div className="mb-24">
			<Heading section="projects" />
			<Project
				float="right"
				title="Energy dApp"
				image="bg-project12"
				description="Developed a decentralized application (dApp) for energy trading between producers and consumers and simulated the same with microgrids concept at a physical level."
				languages=" NodeJS, Solidity, MongoDB"
				github={"https://github.com/daarun-jk/energy-dApp"}
			/>
			<Project
				float="left"
				title="Crypto SMS"
				image="bg-project13"
				description="Developed an Android application for encrypted SMS service using the AES-128-bit algorithm for encryption."
				languages="Java, MongoDB"
				github={"https://github.com/daarun-jk/crypto-sms"}
				
			/>
			<Project
				float="right"
				title="Open Eyes"
				image="bg-project14"
				description="Built a smart cap and a mobile application for the visually impaired to describe the environment using text-to-speech."
				languages="Node JS, Flutter, Azure"
				github={"https://github.com/daarun-jk/open-eyes"}
			/>
			<Project
				float="left"
				title="DROVEROT  "
				image="bg-project15"
				description="Built a drone and an autonomous rover with a robotic arm for military surveillance with facial recognition"
				languages="Angular JS, Python, MongoDB"
				github={"https://github.com/daarun-jk/droverot"}
			/>
		</div>
	);
}
