import Hero from "./components/pages/Hero";
import Navbar from "./components/pages/Navbar";
import Skills from "./components/pages/Skills";
import Projects from "./components/pages/Projects";
import About from "./components/pages/About";
import Footer from "./components/pages/Footer";
import Experience from "./components/pages/Experience";
import Education from "./components/pages/Education";

function App() {
	const GitLink = "https://github.com/daarun-jk";
	const LinkedinLink = "https://www.linkedin.com/in/daarun-jk/";
	const mail = "daarun.jaguvakannan@gmail.com";

	const sections = ["home","skills","projects","experience","education","about"];

	const languagesSkills = ["C#", "C/C++", "Python", "Powershell", "HTML/CSS", "Javascript",];
	const frameworksSkills = ["MySQL", "Flask", "Node JS", "Django"];
	const toolsSkills = ["Git", "Jenkins", "Netsparker"];

	//Hero Props
	const name = "Daarun";
	const surname = "JK";
	const subtitle =
		"Software Engineer";

	//About Props
	const firstParagraph =
		"I am Daarun, a tech enthusiast and a ";
	const secondParagraph =
		"security researcher.";

	return (
		<div className="w-full">
			<Navbar name={name} sections={sections} />
			<div className=" px-10 md:px-32 ">
				<div id="home" className="mt-20 md:mx-20 lg:mx-0 ">
					<Hero subtitle={subtitle} />
				</div>

				<div id="skills" className="py-24">
					<Skills
						languages={languagesSkills}
						frameworks={frameworksSkills}
						tools={toolsSkills}
					/>
				</div>

				<div id="projects" className="py-24">
					<Projects />
				</div>

				<div id="experience" className="py-24">
					<Experience />
				</div>

				<div id="education" className="py-24">
					<Education />
				</div>

				<div id="about" className="py-24">
					<About
						name={name}
						surname={surname}
						firstParagraph={firstParagraph}
						secondParagraph={secondParagraph}
					/>
				</div>
			</div>

			<Footer
					mail={mail}
					github={GitLink}
					linkedin={LinkedinLink}
					name={name} />
		</div>
	);
}

export default App;
