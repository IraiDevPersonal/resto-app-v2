import { ICON_SIZE } from "@utils/constants";

const IconSelector = (props?: React.SVGProps<SVGSVGElement>) => (
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
			d="M8 6.99997C8 6.99997 10.946 3.00001 12 3C13.0541 2.99999 16 7 16 7"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M16 17C16 17 13.054 21 12 21C10.9459 21 8 17 8 17"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export default IconSelector;
