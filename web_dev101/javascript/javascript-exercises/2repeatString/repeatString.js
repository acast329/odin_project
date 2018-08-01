var repeatString = function(str,num) {
	let i = 0;
	let repeat = '';
	if (num<i)
		repeat='ERROR';
	while(i<num){
		repeat += str;
		i++;
	}
	return repeat;
}

module.exports = repeatString
