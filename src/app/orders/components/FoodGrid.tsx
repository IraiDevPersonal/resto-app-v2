import ArrayMap from "@app/core/components/ArrayMap";
import FoodCard from "./FoodCard";

const FoodGrid = () => {
	return (
		<div className="flex flex-wrap gap-4">
			<ArrayMap dataset={[1, 2, 3, 4, 5]}>
				{(item) => (
					<FoodCard
						key={item}
						price={4300}
						maxAmount={3}
						foodName="Hamburguesa"
						discount={20}
						image="/food-placeholder.jpg"
						ingredients={[
							"Hamburguesa vacuno",
							"Mayonesa",
							"Lechuga",
							"Cebolla",
							"Tomate",
							"Queso"
						]}
						sizes={["Normal", "Grande", "Gigante"]}
					/>
				)}
			</ArrayMap>
		</div>
	);
};

export default FoodGrid;
