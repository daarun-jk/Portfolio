export default function ProjectCard(props) {
	return (
		<div
			className={`${props.image} h-full w-full bg-center bg-no-repeat bg-cover rounded-md shadow-card mb-10`}
		>
			<div className="flex items-center justify-center w-full h-full transition duration-300 ease-in rounded-md hover:bg-sky-500/50 bg-transparent" />
		</div>
	);
}
