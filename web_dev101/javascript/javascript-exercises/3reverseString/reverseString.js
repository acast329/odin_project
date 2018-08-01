var reverseString = function(str) {
	let word = str;
	let reverseWord = '';
	for(let i=word.length; i>=0; i--){
		reverseWord += word.substr(i,1);
	}
	return reverseWord;
}

module.exports = reverseString
