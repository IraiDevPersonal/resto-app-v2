import Badge from "@app/core/components/Badge";
import { FilterToggleItem } from "@utils/types";

export const CATEGORY_FILTERS: FilterToggleItem[] = [
	{
		startContent: Badge({ color: "default", value: 102 }),
		label: "Pendientes",
		value: "pendientes"
	},
	{
		startContent: Badge({ color: "default", value: 5 }),
		label: "Local",
		value: "local"
	},
	{
		startContent: Badge({ color: "default", value: 3 }),
		label: "Para Reparto",
		value: "reparto"
	},
	{
		startContent: Badge({ color: "default", value: 20 }),
		label: "Pagados",
		value: "pagados"
	}
];
