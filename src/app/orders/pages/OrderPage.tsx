import ToggleButtons from "@app/core/components/ToggleButtons";
import Main from "@app/core/design-system/Main";
import Search from "@app/core/design-system/Search";
import { path } from "@app/routes/path";
import { Route } from "wouter";
import FoodGrid from "../components/FoodGrid";
import { CATEGORY_FILTERS } from "../utils/constants";
import ModalSelectTable from "@app/tables/components/ModalSelectTable";

const OrderPage = () => {
	return (
		<Route path={path.private.orders}>
			<ModalSelectTable isDefaultOpen />
			<Main>
				<Search name="q" />
				<ToggleButtons options={CATEGORY_FILTERS} />
				<FoodGrid />
			</Main>
		</Route>
	);
};

export default OrderPage;
