import ArrayMap from "@app/core/components/ArrayMap";
import Box from "@app/core/components/Box";
import { ComandCardProps, ComandItem } from "../models/Comand";
import { displayFormatedNumber } from "@utils/functions/displayFormatedNumber";
import CircularProgress from "@app/core/components/CircularProgress";

const ComandCard = ({
	orderNumber,
	tableNumber,
	status,
	orders,
	items
}: ComandCardProps) => {
	return (
		<>
			<Box
				as="article"
				className="flex flex-col gap-2 w-full rounded-xl shadow-md"
			>
				<section className="flex items-center gap-4">
					<CircularProgress progress={30} />
					<div className="*:block mr-auto">
						<h4 className="font-bold text-2xl">Mesa {tableNumber}</h4>
						<span className="text-default-500">{orders} Pedidos</span>
					</div>
					<div className="*:block">
						<span>#{orderNumber} </span>
						<strong className="text-warning font-semibold">{status} </strong>
					</div>
				</section>

				<ComandItems items={items} />
			</Box>
		</>
	);
};

export default ComandCard;

function ComandItems({ items }: { items: ComandItem[] }) {
	const total = items.reduce((acc, cur) => acc + cur.productPrice, 0);
	return (
		<section className="divide-y divide-default-300 space-y-2">
			<ArrayMap
				as="ul"
				dataset={items}
				className="space-y-1"
			>
				{(item) => (
					<li
						key={item.productId}
						className="flex items-center gap-2 justify-between"
					>
						<span>{item.productName}</span>
						<span>
							{displayFormatedNumber(item.productPrice, { showCurrency: true })}
						</span>
					</li>
				)}
			</ArrayMap>
			<div className="flex justify-between items-center pt-2 text-lg">
				<strong>Total</strong>
				<strong>{displayFormatedNumber(total, { showCurrency: true })}</strong>
			</div>
		</section>
	);
}
