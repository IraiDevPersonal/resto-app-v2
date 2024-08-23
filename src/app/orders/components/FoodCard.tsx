import Box from "@app/core/components/Box";
import Button from "@app/core/components/Button";
import Counter from "@app/core/components/Counter";
import ToggleButtons from "@app/core/components/ToggleButtons";
import { displayFormatedNumber } from "@utils/functions/displayFormatedNumber";

type FoodCardProps = {
	price: number;
	image?: string;
	sizes: string[];
	foodName: string;
	maxAmount: number;
	ingredients: string[];
};

const FoodCard = ({
	ingredients,
	maxAmount,
	foodName,
	price,
	sizes
}: FoodCardProps) => {
	return (
		<>
			<Box
				as="article"
				className="flex flex-col gap-2 w-full rounded-xl shadow-md max-w-xs p-0 pb-4 overflow-auto *:px-4"
			>
				<picture className="rounded-lg w-max !p-0">
					<img
						alt="food-placeholder"
						src="/food-placeholder.jpg"
						className="w-80 h-full object-cover"
					/>
				</picture>

				<section className="*:block">
					<h4 className="font-bold text-2xl">{foodName}</h4>
					<Ingredients ingredients={ingredients} />
					<strong className="text-primary text-2xl font-bold">
						{displayFormatedNumber(price, { showCurrency: true })}{" "}
					</strong>
				</section>

				<section>
					<ToggleButtons
						classNames={{
							item: "text-sm"
						}}
						options={sizes.map((el) => ({ label: el, value: el }))}
					/>
				</section>

				<section className="flex items-center gap-2">
					<Counter
						value={0}
						max={maxAmount}
						onChange={() => {}}
					/>
					<Button
						fullwidth
						color="primary"
					>
						Agregar
					</Button>
				</section>
			</Box>
		</>
	);
};

export default FoodCard;

function Ingredients({ ingredients }: Pick<FoodCardProps, "ingredients">) {
	return (
		<span className="text-default-400 text-xs break-words">
			{ingredients.join(", ")}.
		</span>
	);
}
