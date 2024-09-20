import "./components/order.css";
import MainTitle from "../../components/ui/MainTitle";
import Title from "../../components/ui/title";
import Description from "../../components/ui/description";
import Menu from "../../components/menu/Menu";
import Button from "../../components/ui/Button";
import { menu } from "../../data";
const Order = () => {
	return (
		<>
			<section className="order-page bg-[#f7f2e9] w-full overflow-hidden ">
				<div className="container mx-auto lg:px-40 pb-10">
					<div className="py-6">
						<MainTitle title="FAST REACT PIZZA" />
					</div>
					<div className="py-6">
						<Title title="our menu" />
					</div>
					<div className="py-6">
						<Description title="best pizza restaurant evver !!" />
						<Description title="Cairo ,Egypt" />
					</div>
					<div>
						<Menu data={menu} />
					</div>
					<div className="py-6">
						<Description title="We're Open until 22.00" />
					</div>
					<div className="flex justify-center items-center pb-10">
						<Button title="Order" />
					</div>
				</div>
			</section>
		</>
	);
};

export default Order;
