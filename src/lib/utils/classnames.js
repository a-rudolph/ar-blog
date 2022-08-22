export const cx = (classnames) => {
	if (typeof classnames !== 'object') {
		return classnames;
	}

	return Object.keys(classnames)
		.filter((key) => classnames[key])
		.join(' ');
};
