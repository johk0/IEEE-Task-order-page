import Description from "../ui/description";

const Menu = ({ data }) => {
	return (
		<>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 md:justify-start lg:gap-x items-center ">
				{data.map((item) => (
					<div
						key={item.id}
						className={`flex flex-col items-center py-5 md:flex-row md:text-left md:gap-3  justify-center ${
							item.soldOut === true ? "filter grayscale-[90%]" : ""
						}`}>
						<img
							src={item.image}
							alt={item.name}
							className="w-40 h-40 object-cover"
						/>

						<div className="flex flex-col items-center py-1 justify-between h-40 md:items-start ">
							<h3 className="text-2xl font-bold pt-3 md:pt-0 ">{item.name}</h3>
							<Description
								title={item.description}
								style={"md:text-left max-w-[250px]"}
							/>
							<p className="text-lg font-mono">
								{item.soldOut === true ? "Sold Out" : item.price}
							</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Menu;
