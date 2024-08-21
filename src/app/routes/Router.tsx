import MainLayout from "@app/core/design-system/layouts/MainLayout";
import PrivateLayout from "@app/core/design-system/layouts/PrivateLayout";
import { Redirect, Route, Router as Wouter } from "wouter";
import { path } from "./path";
import OrderPage from "@app/orders/pages/OrderPage";

const Router = () => {
	return (
		<MainLayout>
			<Wouter>
				<PrivateLayout>
					<Navigate />
					<OrderPage />
				</PrivateLayout>
			</Wouter>
		</MainLayout>
	);
};
export default Router;

function Navigate() {
	return (
		<Route path="/">
			<Redirect
				replace
				to={path.private.orders}
			/>
		</Route>
	);
}
