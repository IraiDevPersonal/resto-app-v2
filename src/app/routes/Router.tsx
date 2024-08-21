import MainLayout from "@app/core/design-system/layouts/MainLayout";
import PrivateLayout from "@app/core/design-system/layouts/PrivateLayout";
import CategoryPage from "@app/maintainers/category/pages/CategoryPage";
import { Redirect, Route, Router as Wouter } from "wouter";
import { path } from "./path";

const Router = () => {
	return (
		<MainLayout>
			<Wouter>
				<PrivateLayout>
					<Navigate />
					<CategoryPage />
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
