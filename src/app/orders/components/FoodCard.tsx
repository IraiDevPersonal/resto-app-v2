import Box from "@app/core/components/Box";
import Button from "@app/core/components/Button";
import Counter from "@app/core/components/Counter";
import ToggleButtons from "@app/core/components/ToggleButtons";
import { displayFormatedNumber } from "@utils/functions/displayFormatedNumber";
import { useState } from "react";

type FoodCardProps = {
	price: number;
	image?: string;
	sizes: string[];
	foodName: string;
	maxAmount: number;
	discount?: number;
	ingredients: string[];
};

const FoodCard = ({
	ingredients,
	maxAmount,
	discount,
	foodName,
	image,
	price,
	sizes
}: FoodCardProps) => {
	const [foodCounter, setFoodCounter] = useState(0);
	const [selectedSize, setSelectedSize] = useState("");
	const isAddButtonDisabled = foodCounter <= 0 || foodCounter >= maxAmount;
	return (
		<>
			<Box
				as="article"
				className="flex flex-col gap-2 w-full rounded-xl shadow-md max-w-xs p-0 pb-4 overflow-auto *:px-4"
			>
				<picture className="rounded-lg w-max !p-0">
					<img
						src={image}
						alt="food-placeholder"
						className="w-80 h-full object-cover"
					/>
				</picture>

				<section className="*:block">
					<h4 className="font-bold text-2xl">{foodName}</h4>
					<Ingredients ingredients={ingredients} />
					<Price
						price={price}
						discount={discount}
					/>
				</section>

				<section>
					<ToggleButtons
						onSelectValue={setSelectedSize}
						classNames={{ item: "text-sm" }}
						options={sizes.map((el) => ({ label: el, value: el }))}
					/>
				</section>

				<section className="flex items-center gap-2 mt-auto">
					<Counter
						max={maxAmount}
						value={foodCounter}
						onChange={setFoodCounter}
					/>
					<Button
						fullwidth
						color="primary"
						disabled={isAddButtonDisabled || selectedSize === ""}
						title={
							isAddButtonDisabled
								? "La cantidad de este platillo debe ser mayor a 0"
								: undefined
						}
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

function Price({ price, discount }: Pick<FoodCardProps, "discount" | "price">) {
	return (
		<>
			<strong className="text-primary text-xl font-bold leading-snug">
				{displayFormatedNumber(price, { showCurrency: true })}
			</strong>
			{discount && (
				<div className="*:text-sm leading-none">
					<span className="text-default-400 line-through">
						{displayFormatedNumber(price, { showCurrency: true })}
					</span>
					<span className="text-base text-danger">
						{" - "}
						{discount}%
					</span>
				</div>
			)}
		</>
	);
}
