export default function Heading(props) {
	return (
		<div className="w-full">
			<h1 className="flex items-center before:content-['#'] before:text-sky-500 font-fira font-medium text-3xl text-black after:content-[''] after:block after:relative after:top-[2px] after:w-80 after:h-[1.5px] after:bg-sky-500 after:ml-5 mb-10">
				{props.section}
			</h1>
		</div>
	);
}
