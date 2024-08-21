import { Color, Variant } from "@utils/types";
import { ClassNameValue, twMerge } from "tailwind-merge";

export function tw(...arg: ClassNameValue[]) {
	return twMerge(...arg);
}

export function createVariant({
	color,
	input,
	variant
}: {
	color: Color;
	variant: Variant;
	input: Record<Variant, Record<Color, string>>;
}): string {
	return input[variant][color];
}
