var removeFromArray = function() {
	let args = arguments[0];
	let index = 0;
	let i = 1;
	while (arguments[i]!== undefined){
		index = args.indexOf(arguments[i]);
		if (index == -1){
			i++;
		}
		else{
			args.splice(index,1);
			i++;
		}

	}
	
	return args;
}

module.exports = removeFromArray
