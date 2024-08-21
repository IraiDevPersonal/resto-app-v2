import { Option } from "@utils/types";
import ArrayMap from "../components/ArrayMap";
import Button from "../components/Button";
import { useState } from "react";

type FilterToggleButtonsProps = {
	options: Option[];
};

const FilterToggleButtons = ({ options }: FilterToggleButtonsProps) => {
	const [state, setState] = useState<(Option & { isActive: boolean })[]>(
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
