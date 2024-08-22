import FilterToggleButtons from "@app/core/design-system/FilterToggleButtons";
import Main from "@app/core/design-system/Main";
import Search from "@app/core/design-system/Search";
import { path } from "@app/routes/path";
import { Route } from "wouter";
import { CATEGORY_FILTERS } from "../utils/constants";
import ComandCard from "../components/ComandCard";
import { ComandItem } from "../models/Comand";

const ComandsPage = () => {
	return (
		<Route path={path.private.comands}>
			<Main>
				<Search name="q" />
				<FilterToggleButtons options={CATEGORY_FILTERS} />
				<ComandCard
					status="En preparación"
					orderNumber={123456}
					tableNumber={1}
					items={ITEMS}
					orders={3}
				/>
			</Main>
		</Route>
	);
};

export default ComandsPage;

const ITEMS: ComandItem[] = [
	{
		productId: 1,
		productName: "item 1",
		productPrice: 1000,
		productoDiscount: undefined
	},
	{
		productId: 2,
		productName: "item 2",
		productPrice: 1000,
		productoDiscount: undefined
	},
	{
		productId: 3,
		productName: "item 3",
		productPrice: 1000,
		productoDiscount: undefined
	}
];
