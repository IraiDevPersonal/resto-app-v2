import Main from "@app/core/design-system/Main";
import Search from "@app/core/design-system/Search";
import { path } from "@app/routes/path";
import { Route } from "wouter";

const OrderPage = () => {
	return (
		<Route path={path.private.orders}>
			<Main>
				<Search name="q" />
			</Main>
		</Route>
	);
};

export default OrderPage;
