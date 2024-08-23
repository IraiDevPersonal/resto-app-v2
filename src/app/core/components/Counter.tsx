import IconMinus from "../design-system/icons/IconMinus";
import IconPlus from "../design-system/icons/IconPlus";
import Button from "./Button";

type CounterProps = {
	max: number;
	value: number;
	onChange(value: number): void;
};

const Counter = ({ max, value, onChange }: CounterProps) => {
	return (
		<div className="flex items-center gap-4 w-max">
			<Button
				isIconOnly
				color="default"
				disabled={value <= 0}
				onClick={() => onChange(Math.max(0, value - 1))}
			>
				<IconMinus />
			</Button>
			<span
				title={`Maximo ${max}`}
				className="text-lg font-semibold"
			>
				{value}
			</span>
			<Button
				isIconOnly
				color="default"
				disabled={value >= max}
				onClick={() => onChange(Math.min(max, value + 1))}
			>
				<IconPlus />
			</Button>
		</div>
	);
};

export default Counter;
