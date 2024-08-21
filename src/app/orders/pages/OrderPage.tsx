import FilterToggleButtons from "@app/core/design-system/FilterToggleButtons";
import Main from "@app/core/design-system/Main";
import Search from "@app/core/design-system/Search";
import { path } from "@app/routes/path";
import { Route } from "wouter";
import { CATEGORY_FILTERS } from "../utils/constants";

const OrderPage = () => {
	return (
		<Route path={path.private.orders}>
			<Main>
				<Search name="q" />
				<FilterToggleButtons options={CATEGORY_FILTERS} />
			</Main>
		</Route>
	);
};

export default OrderPage;
