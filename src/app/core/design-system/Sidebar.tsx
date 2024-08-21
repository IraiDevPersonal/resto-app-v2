import { Link, useRoute } from "wouter";
import { Path } from "../models/path";
import { PATHS } from "../utils/constants";
import { tw } from "@utils/functions/tailwind";
import Profile from "@app/profile/components/Profile";
import ArrayMap from "../components/ArrayMap";
import Box from "../components/Box";

const Sidebar = () => {
	return (
		<Box
			as="aside"
			className="flex flex-col gap-8 w-72 h-screen min-h-screen px-0 pb-0 *:px-4"
		>
			<div className="flex items-center gap-2">
				<h1 className="text-3xl font-bold">
					Resto<span className="text-primary">App</span>
				</h1>
			</div>

			<div className="flex flex-col gap-1.5">
				<small className="capitalize text-default-700">
					Mar. 20, Agosto 2024
				</small>
				<span className="font-bold text-3xl">10:05:22 PM</span>
			</div>

			<nav className="!px-0">
				<ArrayMap
					as="ul"
					dataset={PATHS}
					className="space-y-1"
				>
					{(item) => <ActiveLink {...item} />}
				</ArrayMap>
			</nav>

			<Profile />
		</Box>
	);
};

export default Sidebar;

function ActiveLink(item: Path) {
	const [isActive] = useRoute(item.path);
	return (
		<Link
			asChild
			to={item.path}
			key={item.path}
		>
			<li
				className={tw(
					"flex items-center gap-2.5 font-medium p-2.5 pl-4 w-5/6 rounded-r-xl hover:bg-default-100",
					"transition-colors duration-300 cursor-pointer",
					isActive && "text-white bg-primary hover:bg-primary-500"
				)}
			>
				<figure>{item.icon}</figure>
				{item.label}
			</li>
		</Link>
	);
}
