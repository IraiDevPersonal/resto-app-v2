import { createVariant, tw } from "@utils/functions/tailwind";
import { Color } from "@utils/types";

type BadgeProps = {
	value: number;
	className?: string;
};

const Badge = ({ value, className }: BadgeProps) => {
	return (
		<>
			<span
				className={tw(
					"h-5 w-5 min-w-5 max-w-10 rounded-full",
					badgeVariant({ color: "danger" }),
					className
				)}
			>
				{value}{" "}
			</span>
		</>
	);
};

export default Badge;

const badgeVariant = ({ color }: { color: Color }) =>
	createVariant<"filled">({
		color,
		variant: "filled",
		input: {
			filled: {
				secondary: "bg-secondary hover:bg-opacity-80 text-white",
				warning: "bg-warning hover:bg-opacity-80 text-white",
				primary: "bg-primary hover:bg-opacity-80 text-white",
				success: "bg-success hover:bg-opacity-80 text-white",
				default: "bg-default-200 hover:bg-opacity-80 text-inherit",
				danger: "bg-danger hover:bg-opacity-80 text-white",
				info: "bg-info hover:bg-opacity-80 text-white"
			}
		}
	});
