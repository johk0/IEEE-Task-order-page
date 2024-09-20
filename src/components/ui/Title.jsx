import "./css/Title.css";
const Title = ({ title }) => {
	return (
		<>
			<div>
				<h1 className="Title uppercase text-2xl text-title text-center tracking-widest break-words border-b-2 border-t-2 border-title w-fit mx-auto py-2">
					{title}
				</h1>
			</div>
		</>
	);
};

export default Title;
