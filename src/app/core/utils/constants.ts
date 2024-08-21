import { path } from "@app/routes/path";
import IconConfig from "../design-system/icons/IconConfig";
import IconHome from "../design-system/icons/IconHome";
import IconOrders from "../design-system/icons/IconOrders";
import { Path } from "../models/path";

export const PATHS: Path[] = [
	{
		icon: IconHome(),
		label: "Comandas",
		path: path.private.home
	},
	{
		icon: IconOrders(),
		label: "Pedidos",
		path: path.private.orders
	},
	{
		icon: IconConfig(),
		label: "Configuraciones",
		path: path.private.configs
	}
];
