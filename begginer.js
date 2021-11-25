//Reverse a given string
function reverse(str) {
	console.time("Reverse");
	return str.split("").reverse().join("");

	//Second Method
	// let result = "";
	// for (let i = str.length - 1; i >= 0; i--) {
	// 	result += str[i];
	// }
	// return result;
}

//Factorise a number, number factorial
function factorial(n) {
	let val = 1;
	for (let i = n; i > 0; i--) {
		val *= i;
	}
	return val;
}

//Return the longest word in a sentence
function longestWord(str) {
	let words = str.split(" "),
		longest = "";

	for (let i = 0; i < words.length; i++) {
		if (words[i].length > longest.length) longest = words[i];
	}

	return longest;
}

//Determine if a string ends with the given value
function strEndsWith(str, target) {
	return str.slice(-target.length).toLowerCase() === target.toLowerCase();
}

//Return an array of the highest numbers from a list of number arrays
function largestVals(arr) {
	let result = [];

	//Method One
	for (let i = 0; i < arr.length; i++) {
		let maxNum = Math.max(...arr[i]);
		result.push(maxNum);
	}
	// Method Two
	for (let i = 0; i < arr.length; i++) {
		let maxNum = arr[i][0];
		for (let j = 1; j < arr[i].length; j++) {
			if (arr[i][j] > maxNum) maxNum = arr[i][j];
		}
		result.push(maxNum);
	}

	return result;
}

//Repeat a string for n number of times
function strRepeat(str, n) {
	let val = "";
	for (let i = 0; i < n; i++) {
		val += str;
	}
	return val;
}

//Truncate string if the length is higher than the given number
function truncateStr(str, n) {
	return str.length > n ? str.slice(0, n) + "..." : str;
}

//Tells if all the letters in second string are in first string
function hasAllChars(str1, str2) {
	const target = str1.toLowerCase(),
		testChar = str2.toLowerCase();
	for (let i = 0; i < testChar.length; i++) {
		if (target.indexOf(testChar[i]) < 0) return false;
	}

	return true;
}

// Split array elements into given number of groups
function splitArr(arr, size) {
	if (!size) return arr;
	let result = [];
	//Method One
	for (let i = 0; i < arr.length; i += size) {
		result.push(arr.slice(i, i + size));
	}

	//Method Two
	//let temp = [];
	// for (let i = 0; i < arr.length; i++) {
	// 	if (i % size === size - 1 /*Up to the size*/) {
	// 		temp.push(arr[i]);
	// 		result.push(temp);
	// 		temp = [];
	// 	} else {
	// 		temp.push(arr[i]);
	// 	}
	// }
	// if (temp.length !== 0) result.push(temp);
	return result;
}

function toTitleCase(str) {
	// return ["Hello", "Hi"][0].replace("H", "e");
	let frags = str.trim().toLowerCase().split(" ");
	newStr = [];
	for (let i = 0; i < frags.length; i++) {
		let word = frags[i];
		newStr.push(word.replace(word[0], word[0].toUpperCase()));
	}
	return newStr.join(" ");
}

//Lowest possible index a num can be inserted into the given array
function position(arr, num) {
	let result = arr
		.concat(num)
		.sort((a, b) => a - b)
		.indexOf(num);

	//Method Two
	// let result = arr.length;
	// arr.sort((a, b) => a - b);
	// for (let i = 0; i < arr.length; i++) {
	// 	if (arr[i] >= num) return i;
	// }

	return result;
}

const result = position([2, 4, 6, 3], 4);
console.log(result);
