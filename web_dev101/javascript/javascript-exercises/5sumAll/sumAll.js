var sumAll = function(num1, num2) {
	let lowNum = 0;
	let highNum = 0;
	let finalSum = 0;

	if (num1>0 && num2>0 && typeof(num1)=='number' && typeof(num2)=='number'){

		if (num1<num2){
			lowNum = num1;
			highNum = num2;
		}else {
			lowNum = num2;
			highNum = num1;
		}

		while (lowNum<=highNum){
			finalSum+=lowNum;
			lowNum++;
		}
		return finalSum;
	}

	else {
		return 'ERROR';
	}
}

module.exports = sumAll
