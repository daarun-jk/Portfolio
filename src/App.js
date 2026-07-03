import About from "./components/pages/About";
import Navbar from "./components/pages/Navbar";
import Skills from "./components/pages/Skills";
import Projects from "./components/pages/Projects";

import Footer from "./components/pages/Footer";
import Experience from "./components/pages/Experience";
import Education from "./components/pages/Education";
import Achievements from "./components/pages/Achievements";

function App() {
	const GitLink = "https://github.com/daarun-jk";
	const LinkedinLink = "https://www.linkedin.com/in/daarun-jk/";
	const mail = "daarun.jaguvakannan@gmail.com";

	const sections = ["about", "education", "skills", "experience", "projects", "achievements"];

	const name = "Daarun JK";
	const subtitle = "Software Engineer";

	return (
		<div className="w-full min-h-screen bg-white dark:bg-black transition-colors duration-300">
			<Navbar name={name} sections={sections} />
			<div className=" px-10 md:px-32 ">
				<div id="about" className="mt-20 md:mx-20 lg:mx-0 ">
					<About subtitle={subtitle} />
				</div>

				<div id="education" className="py-24">
					<Education />
				</div>

				<div id="skills" className="py-24">
					<Skills />
				</div>

				<div id="experience" className="py-24">
					<Experience />
				</div>

				<div id="projects" className="py-24">
					<Projects />
				</div>

				<div id="achievements" className="py-24">
					<Achievements />
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
