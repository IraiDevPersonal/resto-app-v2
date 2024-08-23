import IconMinus from "../design-system/icons/IconMinus";
import IconPlus from "../design-system/icons/IconPlus";
import Button from "./Button";

type CounterProps = {
	max: number;
	value: number;
	onChange(value: number): void;
};

const Counter = ({ max, onChange, value }: CounterProps) => {
	return (
		<div className="flex items-center gap-4 w-max">
			<Button
				isIconOnly
				color="default"
				disabled={value <= 0}
			>
				<IconMinus />
			</Button>
			<span className="text-lg font-semibold">{value}</span>
			<Button
				isIconOnly
				color="default"
				disabled={value >= max}
			>
				<IconPlus />
			</Button>
		</div>
	);
};

export default Counter;
