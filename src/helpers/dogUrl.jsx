export const dogUrl = (dogName) => {
	return dogName.replace(/\s+/g, "_").toLowerCase();
};
