const Description = ({ title, style }) => {
	return (
		<>
			<div>
				<h1 className={`text-center text-description font-mono ${style}`}>
					{title}
				</h1>
			</div>
		</>
	);
};

export default Description;
