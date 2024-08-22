import ArrayMap from "@app/core/components/ArrayMap";
import { ComandItem } from "../models/Comand";
import ComandCard from "./ComandCard";

const ComandGrid = () => {
	return (
		<div className="space-y-4">
			<Grid
				title="Pendientes"
				comandCards={[1, 2, 3, 4]}
			/>
			<Grid
				title="En Preparación"
				comandCards={[1, 2]}
			/>
		</div>
	);
};

export default ComandGrid;

function Grid({
	comandCards,
	title
}: {
	title: string;
	comandCards: number[];
}) {
	return (
		<section className="space-y-4">
			<h3 className="font-semibold text-2xl">
				{title} ({comandCards.length})
			</h3>

			<ArrayMap
				dataset={comandCards}
				as="div"
				className="grid grid-cols-3 gap-4"
			>
				{(item) => (
					<ComandCard
						key={item}
						status="En preparación"
						orderNumber={123456}
						tableNumber={item}
						items={ITEMS}
						orders={3}
					/>
				)}
			</ArrayMap>
		</section>
	);
}

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
