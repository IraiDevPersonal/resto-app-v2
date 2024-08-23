import ToggleButtons from "@app/core/components/ToggleButtons";
import Main from "@app/core/design-system/Main";
import Search from "@app/core/design-system/Search";
import { path } from "@app/routes/path";
import { Route } from "wouter";
import { CATEGORY_FILTERS } from "../utils/constants";
import FoodCard from "../components/FoodCard";

const OrderPage = () => {
	return (
		<Route path={path.private.orders}>
			<Main>
				<Search name="q" />
				<ToggleButtons options={CATEGORY_FILTERS} />
				<FoodCard
					price={4300}
					maxAmount={3}
					foodName="Hamburguesa"
					ingredients={[
						"Hamburguesa vacuno",
						"Mayonesa",
						"Lechuga",
						"Cebolla",
						"Tomate",
						"Queso"
					]}
					sizes={["Normal", "Grande", "Gigante"]}
				/>
			</Main>
		</Route>
	);
};

export default OrderPage;
