export const dogUrl = (dogName) => {
	return dogName.replace(/\s+/g, "-").toLowerCase();
};
