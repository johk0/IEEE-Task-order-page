import "./components/order.css";
import MainTitle from "../../components/ui/MainTitle";
import Title from "../../components/ui/title";
import Description from "../../components/ui/description";
import Menu from "../../components/menu/Menu";
import { menu } from "../../data";
const Order = () => {
	return (
		<>
			<section className="order-page bg-[#f7f2e9] w-full overflow-hidden pb-10">
				<div className="container mx-auto lg:px-40">
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
				</div>
			</section>
		</>
	);
};

export default Order;
