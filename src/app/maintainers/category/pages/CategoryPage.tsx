import Button from "@app/core/components/Button";
import Table from "@app/core/components/Table";
import Header from "@app/core/design-system/Header";
import IconPlus from "@app/core/design-system/icons/IconPlus";
import Main from "@app/core/design-system/Main";
import { path } from "@app/routes/path";
import { TableColumn } from "@utils/types";
import { Helmet } from "react-helmet";
import { Route } from "wouter";

const TITLE = "Catergorias";

const CategoryPage = () => {
	return (
		<Route path={path.private.orders}>
			<Header title={TITLE}>
				<Button startContent={<IconPlus />}>Agregar</Button>
			</Header>
			<Main>
				<Table
					columns={COLUMNS}
					sizing={{ height: 200 }}
					dataset={["item 1", "item 2", "item 3"]}
				>
					{(item) => (
						<>
							<Table.Cell>{item}</Table.Cell>
							<Table.Cell>{item}</Table.Cell>
							<Table.Cell>{item}</Table.Cell>
						</>
					)}
				</Table>
			</Main>

			<Helmet>
				<title>VentApp/{TITLE}</title>
			</Helmet>
		</Route>
	);
};

export default CategoryPage;

const COLUMNS: TableColumn[] = [
	{
		key: "1",
		children: "col 1"
	},
	{
		key: "2",
		children: "col 2"
	},
	{
		key: "3",
		children: "col 3"
	}
];
