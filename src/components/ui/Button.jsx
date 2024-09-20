const Button = ({ title }) => {
	return (
		<>
			<button className="bg-primary text-black px-4 py-2 rounded-sm cursor-pointer hover:bg-black hover:text-white transition-all duration-300">
				{title}
			</button>
		</>
	);
};

export default Button;
