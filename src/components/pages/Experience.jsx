import Experiences from "../molecules/Experiences";
import Heading from "../parts/Heading";

export default function Experience() {
	return (
		<div className="mb-24">
			<Heading section="experience" />
			<Experiences
				float="right"
				title="Associate Engineer"
				image="bg-project8"
				description="Developed a custom .NET MAUI project template in Visual Studio to generate REST API Client using the Nswag
				toolchain and generate Views and View Models using T4 templates, given a project-specific OpenAPI specification"
				description1="Created a Windows Installer (.msi) using WIX Toolset with custom actions to elevate privilege and launch a Readme file"
				company="Unisys India (Aug 2022 - Present)"
			/>
			<Experiences
				float="left"
				title="Student Intern"
				image="bg-project8"
				description="Worked on a custom command line application in .NET C# for Web application operations using REST API"
				description1="Designed and developed automation test cases using Pester framework with the help of the .NET C# command line application"
				company="Unisys India (Mar 2022 - July 2022)"		
			/>

			<Experiences
				float="right"
				title="Penetration Testing Intern"
				image="bg-project7"
				description="Exploited and mitigated OWASP Top 10 vulnerabilities using hands-on labs provided and prepared Pen-testing reports"
				company="Virtually Testing Foundation (Oct 2021 - Dec 2021)"
			/>

			<Experiences
				float="left"
				title="Research Intern"
				image="bg-project10"
				description="Explored eBPF and its capabilities to run programs at the Linux Kernel level"
				description1="Developed an egress network packet filtering based on IP addresses using eBPF program and eBPF maps"
				company="Indian Institute of Science (Sept 2021 - Oct 2021)"
			/>

		</div>
	);
}
