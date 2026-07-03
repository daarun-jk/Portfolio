export default function Skills() {
  const skillCategories = [
    {
      title: "Programming & Scripting",
      skills: ["C#", "Python", "Java", "C++", "JavaScript", "TypeScript", "SQL", "PowerShell", "Bash"],
    },
    {
      title: "Frameworks & Libraries",
      skills: [".NET 8", "ASP.NET Core", "MAUI", "Node.js", "React", "Spark", "Kafka"],
    },
    {
      title: "Cloud & Databases",
      skills: ["Azure", "AWS", "GCP", "SQL Server", "MongoDB", "Elasticsearch", "Firebase"],
    },
    {
      title: "DevOps, AI & Architecture",
      skills: ["Git", "Jenkins", "CI/CD", "Docker", "Kubernetes", "LLMs", "Microservices", "eBPF"],
    },
    {
      title: "Certifications",
      skills: ["ServiceNow Certified System Administrator (CSA)", "Certified Ethical Hacker-Practical (EC-Council)"],
    },
  ];

  return (
    <div className="w-full">
      <Heading section="Skills" />

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Category Title */}
            <h3 className="text-xl font-bold text-black dark:text-white mb-4">
              {category.title}
            </h3>

            {/* Skill Badges Container */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1.5 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-sm font-medium rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


function Heading(props) {
  return (
    <div className="w-full">
      <h1 className="flex items-center before:content-['#'] before:text-sky-500 font-fira font-medium text-3xl text-black dark:text-white after:content-[''] after:block after:relative after:top-[2px] after:w-80 after:h-[1.5px] after:bg-sky-500 after:ml-5 mb-10">
        {props.section}
      </h1>
    </div>
  );
}
