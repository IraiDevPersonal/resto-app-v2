import IconConfig from "@app/core/design-system/icons/IconConfig";

const Profile = () => {
	return (
		<button
			title="Editar perfil"
			className="flex justify-start items-center gap-2 p-4 group"
		>
			<picture className="h-10 w-10 min-w-10 rounded-full flex items-center justify-center bg-default-200 font-semibold">
				US
			</picture>

			<strong className="w-44 truncate group-hover:underline underline-offset-2 text-left">
				Usuario
			</strong>

			<figure className="text-transparent group-hover:text-inherit transition-colors duration-300">
				<IconConfig />
			</figure>
		</button>
	);
};

export default Profile;
