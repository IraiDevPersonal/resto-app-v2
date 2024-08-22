import FilterToggleButtons from "@app/core/design-system/FilterToggleButtons";
import Main from "@app/core/design-system/Main";
import Search from "@app/core/design-system/Search";
import { path } from "@app/routes/path";
import { Route } from "wouter";
import ComandGrid from "../components/ComandGrid";
import { CATEGORY_FILTERS } from "../utils/constants";

const ComandsPage = () => {
	return (
		<Route path={path.private.comands}>
			<Main>
				<Search name="q" />
				<FilterToggleButtons options={CATEGORY_FILTERS} />
				<ComandGrid />
			</Main>
		</Route>
	);
};

export default ComandsPage;
