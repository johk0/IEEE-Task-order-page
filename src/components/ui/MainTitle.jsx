import "./css/mainTitle.css";

const MainTitle = ({ title }) => {
	return (
		<div className="text-3xl sm:text-5xl text-center uppercase w-fit mx-auto ">
			<h1 className="main-title text-[#EDC84B] font-thin">{title}</h1>
			{/* Added inline style */}
		</div>
	);
};

export default MainTitle;
