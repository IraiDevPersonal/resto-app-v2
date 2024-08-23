import { FilterToggleItem } from "@utils/types";
import { useState } from "react";
import ArrayMap from "./ArrayMap";
import Button from "./Button";
import { tw } from "@utils/functions/tailwind";

type FilterToggleButtonsProps = {
	onSelectValue?(value: FilterToggleItem["value"]): void;
	options: FilterToggleItem[];
	classNames?: Partial<{
		wrapper: string;
		item: string;
	}>;
};

type Option = FilterToggleItem & { isActive: boolean };

const ToggleButtons = ({
	options,
	classNames,
	onSelectValue
}: FilterToggleButtonsProps) => {
	const [state, setState] = useState<Option[]>(
		options.map((el) => ({ ...el, isActive: false }))
	);
	const handleSelectOption = (value: Option["value"]) => {
		setState((prevState) => {
			return prevState.map((el) => {
				const selected = el.value === value;
				onSelectValue?.(value);
				return { ...el, isActive: selected };
			});
		});
	};
	return (
		<>
			<ArrayMap
				as="ul"
				dataset={state}
				className={tw("flex flex-wrap items-center gap-2", classNames?.wrapper)}
			>
				{(item) => (
					<Button
						key={item.value}
						className={classNames?.item}
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

export default ToggleButtons;
