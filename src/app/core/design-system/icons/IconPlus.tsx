import { ICON_SIZE } from "@utils/constants";

const IconPlus = (props?: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		width={ICON_SIZE}
		height={ICON_SIZE}
		// color={"#000000"}
		fill={"none"}
		{...props}
	>
		<path
			d="M12 4V20M20 12H4"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export default IconPlus;
