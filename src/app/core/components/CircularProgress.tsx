import { tw } from "@utils/functions/tailwind";
import { Color } from "@utils/types";

type CircularProgressProps = {
	classNames?: Partial<{
		progress: string;
		baseProgress: string;
	}>;
	strokeWidth?: number;
	progress: number;
	color?: Color;
	size?: number;
};

const CircularProgress = ({
	progress,
	size = 40,
	classNames,
	strokeWidth = 4,
	color = "success"
}: CircularProgressProps) => {
	const radius = (size - strokeWidth) / 2;
	const circumference = 2 * Math.PI * radius;
	const strokeDashoffset = circumference - (progress / 100) * circumference;

	return (
		<div className="flex items-center justify-center">
			<svg
				width={size}
				height={size}
				viewBox={`0 0 ${size} ${size}`}
				className="transform rotate-90"
			>
				<circle
					r={radius}
					fill="none"
					cx={size / 2}
					cy={size / 2}
					strokeWidth={strokeWidth}
					className={tw("stroke-default-200", classNames?.baseProgress)}
				/>
				<circle
					r={radius}
					fill="none"
					cx={size / 2}
					cy={size / 2}
					strokeWidth={strokeWidth}
					strokeDasharray={circumference}
					strokeDashoffset={strokeDashoffset}
					className={tw(
						"transition-all duration-300",
						progressColor[color],
						classNames?.progress
					)}
				/>
				<text
					x="50%"
					y="50%"
					dy=".3em"
					fontWeight="bold"
					textAnchor="middle"
					fontSize={size / 4}
					dominantBaseline="middle"
					className="fill-default-600"
				>
					{progress.toString()}%
				</text>
			</svg>
		</div>
	);
};

export default CircularProgress;

const progressColor: Record<Color, string> = {
	danger: "stroke-danger",
	default: "stroke-default-950",
	info: "stroke-info",
	primary: "stroke-primary",
	secondary: "stroke-secondary",
	success: "stroke-success",
	warning: "stroke-warning"
};
