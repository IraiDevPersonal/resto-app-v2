import IconConfig from "@app/core/design-system/icons/IconConfig";

const Profile = () => {
	return (
		<>
			<button
				title="Editar perfil"
				className="flex justify-start items-center gap-2 p-4 mt-auto group"
			>
				<picture>
					<span className="h-10 w-10 min-w-10 rounded-full flex items-center justify-center bg-default-200 font-semibold">
						US
					</span>
				</picture>

				<div className="flex flex-col *:leading-tight *:text-left mr-auto">
					<strong className="w-44 truncate group-hover:underline underline-offset-2">
						Usuario
					</strong>
					<span className="text-sm text-default-400">rol.</span>
				</div>

				<figure className="text-transparent group-hover:text-inherit transition-colors duration-300">
					<IconConfig />
				</figure>
				{/* <Dropdown
					align="start"
					side="top"
					trigger={
						<Button
							isIconOnly
							variant="light"
							color="default"
						>
							<IconSelector />
						</Button>
					}
				>
					<Dropdown.Item endContent={<IconProfile />}>Ver Perfil</Dropdown.Item>
					<Dropdown.Item endContent={<IconLogout />}>
						Cerrar Sesión
					</Dropdown.Item>
				</Dropdown> */}
			</button>
		</>
	);
};

export default Profile;
