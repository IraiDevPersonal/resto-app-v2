import { FilterToggleItem } from "@utils/types";
import { useState } from "react";
import ArrayMap from "../components/ArrayMap";
import Button from "../components/Button";

type FilterToggleButtonsProps = {
	options: FilterToggleItem[];
};

type Option = FilterToggleItem & { isActive: boolean };

const FilterToggleButtons = ({ options }: FilterToggleButtonsProps) => {
	const [state, setState] = useState<Option[]>(
		options.map((el) => ({ ...el, isActive: false }))
	);
	const handleSelectOption = (value: Option["value"]) => {
		setState((prevState) =>
			prevState.map((el) => ({ ...el, isActive: el.value === value }))
		);
	};
	return (
		<>
			<ArrayMap
				as="ul"
				dataset={state}
				className="flex flex-wrap items-center gap-2"
			>
				{(item) => (
					<Button
						key={item.value}
						endContent={item.endContent}
						startContent={item.startContent}
						color={item.isActive ? "primary" : "default"}
						onClick={() => handleSelectOption(item.value)}
					>
						{item.label}
					</Button>
				)}
			</ArrayMap>
		</>
	);
};

export default FilterToggleButtons;
