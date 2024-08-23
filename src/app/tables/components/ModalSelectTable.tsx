import ArrayMap from "@app/core/components/ArrayMap";
import Button from "@app/core/components/Button";
import Checkbox from "@app/core/components/Checkbox";
import Modal from "@app/core/components/Modal";
import IconFoodTable from "@app/core/design-system/icons/IconFoodTable";
import { useDisclosure } from "@app/core/hooks/useDisclosure";

type ModalSelectTableProps = {
	isDefaultOpen?: boolean;
	showTrigger?: boolean;
};

const ModalSelectTable = ({
	isDefaultOpen,
	showTrigger
}: ModalSelectTableProps) => {
	const { isOpen, onOpenChange } = useDisclosure(isDefaultOpen);
	return (
		<>
			{showTrigger && (
				<Button
					color="secondary"
					onClick={onOpenChange}
					endContent={<IconFoodTable />}
				>
					Seleccionar Mesas
				</Button>
			)}

			<Modal
				isOpen={isOpen}
				onClose={onOpenChange}
			>
				<Modal.Title>Selección de Mesas</Modal.Title>
				<Modal.Body>
					<h3 className="font-semibold text-lg">Mesas disponibles:</h3>
					<ArrayMap
						as="ul"
						className="space-y-2 px-2"
						dataset={[1, 2, 3, 4, 5]}
					>
						{(item) => (
							<li
								key={item}
								className="flex items-center justify-between gap-2"
							>
								Mesa {item}
								<Checkbox />
							</li>
						)}
					</ArrayMap>
				</Modal.Body>
				<Modal.Actions
					cancel={{
						handler: () => onOpenChange()
					}}
					action={{
						handler: () => onOpenChange(),
						label: "Seleccionar Mesas",
						type: "button"
					}}
				/>
			</Modal>
		</>
	);
};

export default ModalSelectTable;
