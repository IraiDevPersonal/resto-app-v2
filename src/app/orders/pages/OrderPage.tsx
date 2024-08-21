import Main from "@app/core/design-system/Main";
import { path } from "@app/routes/path";
import { Route } from "wouter";

const OrderPage = () => {
	return (
		<Route path={path.private.orders}>
			<Main>
				<h1>Orders Page</h1>
			</Main>
		</Route>
	);
};

export default OrderPage;
