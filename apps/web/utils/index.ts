export const generateUniqueId = () => {
	const id = crypto.randomUUID().toString().replace(/-/g, "");
	return id;
};
