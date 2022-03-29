/** Obtenir la date du jour au format long : YYYY-M-JJ */
export function getFullDateOfToday() {
	const today = new Date();
	const month =
		today.getMonth() < 10 ? "0" + today.getMonth() : today.getMonth();
	return today.getFullYear() + "-" + month + "-" + today.getDate();
}
