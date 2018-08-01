var leapYears = function(year) {
	let checkLeap = year;
	if (checkLeap % 100 == 0 && checkLeap % 400 == 0 ||
	   checkLeap % 100 !== 0 && checkLeap % 4 == 0){
		return true;
	}
	else {
		return false;
	}
}

module.exports = leapYears
