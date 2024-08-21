import { tw } from "@utils/functions/tailwind";
import { PropsWithChildren } from "react";
import Box from "../components/Box";

type Props = {
	className?: string;
} & PropsWithChildren;

const Main = ({ children, className }: Props) => {
	return (
		<Box
			as="main"
			className={tw("flex flex-col w-full gap-4 p-4 min-h-screen", className)}
		>
			{children}
		</Box>
	);
};

export default Main;
