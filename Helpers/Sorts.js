function sortByCourses(a, b, college) {
	let acount = 0,
		bcount = 0;
	a.Courses.forEach((element) => {
		if (college.collegeMap[element] === 1) acount++;
	});
	b.Courses.forEach((element) => {
		if (college.collegeMap[element] === 1) bcount++;
	});
	if (acount === bcount) return sortByStudentsCount(a, b, college);
	return acount > bcount ? -1 : 1;
}

exports.sortByCountry = (a, b, college) => {
	if (a.Country === b.Country && a.Country === college.Country)
		return sortByState(a, b, college);
	if (a.Country === college.Country) return -1;
	if (b.Country === college.Country) return 1;
	return sortByCourses(a, b, college);
};
function sortByState(a, b, college) {
	if (a.State === b.State && a.State === college.State)
		return sortByCity(a, b, college);
	if (a.State === college.State) return -1;
	if (b.State === college.State) return 1;
	return sortByCourses(a, b, college);
}
function sortByCity(a, b, college) {
	if (a.City === b.City && a.City === college.City)
		return sortByCourses(a, b, college);
	if (a.City === college.City) return -1;
	if (b.City === college.City) return 1;
	return sortByCourses(a, b, college);
}
function sortByStudentsCount(a, b, college) {
	return Math.abs(college.Students_Count - a.Students_Count) <
		Math.abs(college.Students_Count - b.Students_Count)
		? -1
		: 1;
}
