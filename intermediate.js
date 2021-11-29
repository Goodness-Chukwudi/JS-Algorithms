//Calculate the sum of numbers within a range
function sumValues(arr) {
	if (typeof (arr[0] + arr[1]) !== "number" || arr.length !== 2)
		return "Error: invalid input!";

	//First Method
	let startNum = arr[0],
		endNum = arr[1];
	let count = Math.abs(startNum - endNum) + 1;
	return ((startNum + endNum) * count) / 2;

	// Second Method
	// let startNum = Math.min(arr[0], arr[1]),
	// 	endNum = Math.max(arr[0], arr[1]),
	// 	sum = 0;

	// for (let i = startNum; i <= endNum; i++) {
	// 	sum += i;
	// }
	// return sum;
}

//Returns the element of an array that isn't found in the both arrays
function singleExist(arr1, arr2) {
	let newArr = [];
	function evalDiff(firstArr, secArray) {
		for (let i = 0; i < firstArr.length; i++) {
			if (secArray.indexOf(firstArr[i]) === -1) newArr.push(firstArr[i]);
		}
	}

	evalDiff(arr1, arr2);
	evalDiff(arr2, arr1);
	return newArr;
}

//Remove any element in the array that matches any of the given arguments
function destroy(arr, ...valToRemove) {
	for (let i = 0; i < arr.length; i++) {
		if (valToRemove.indexOf(arr[i]) !== -1) arr.splice(i, 1);
	}
	return arr;

	//Method Two
	// let valToRemove = Object.values(arguments).slice(1);
	// for (let i = 0; i < arr.length; i++) {
	// 	if (valToRemove.indexOf(arr[i]) !== -1) arr.splice(i, 1);
	// }
	// return arr;
}

//Return objects in an array of objects that has matching key value pair with the provided argument
function matchingObjects(list, src) {
	let newList = [],
		srcKeys = Object.keys(src);
	for (let i = 0; i < list.length; i++) {
		for (let j = 0; j < srcKeys.length; j++) {
			if (
				list[i].hasOwnProperty(srcKeys[j]) &&
				list[i][srcKeys[j]] === src[srcKeys[j]]
			)
				newList.push(list[i]);
		}
	}
	return newList;
}

//Returns the smallest positive integer (greater than 0) that does not occur in the given array
function solution(arr) {
	//Method one

	if (arr.length > 0) {
		let set = new Set(),
			maxNum = 0;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > 0) {
				set.add(arr[i]);
				maxNum = Math.max(maxNum, arr[i]);
			}
		}

		for (let i = 1; i <= maxNum; i++) {
			if (!set.has(i)) {
				return i;
			}
		}
		return maxNum + 1;
	} else throw new Error("Error: invalid input");

	//Method two
	//Using for loop. significantly slower

	// if (A.length > 0) {
	// 	let val = A[0],
	// 		maxNum;
	// 	for (let i = 1, len = A.length; i < len; i++) {
	// 		if (A[i] > val) val = A[i];
	// 	}
	// 	maxNum = val;

	// 	if (maxNum > 0) {
	// 		for (let i = 1; i <= maxNum; i++) {
	// 			if (A.indexOf(i) === -1) return i;
	// 		}
	// 		return maxNum + 1;
	// 	} else return 1;
	// } else throw new Error("Error: invalid input");
}

// function binaryGap(n) {
// 	if (n > 0 && n === parseInt(n, 10)) {
// 		let binaryFrags = n.toString(2).split("1"),
// 			entries = new Set(binaryFrags).values(),
// 			gap = 0;

// 		for (const entry of entries) {
// 			let len = entry.length;
// 			if (len > gap) gap = len;
// 		}

// 		return gap;
// 	}
// 	return "Invalid input";
// }
//Returns the longest sequence of zeros in binary representation of an integer
function binaryGap(N) {
	let gap = 0;
	if (N === parseInt(N, 10)) {
		if (N >= 1 && N <= 2147483647) {
			let binaryFrags = N.toString(2).split(""),
				startIndex = binaryFrags.indexOf("1"),
				endIndex = binaryFrags.lastIndexOf("1");
			if (startIndex >= 0) {
				let count = 0;
				for (let i = startIndex; i <= endIndex; i++) {
					if (binaryFrags[i] === "0") count++;
					else {
						if (count > gap) gap = count;
						count = 0;
					}
				}
			}
		} else return "Number is out of range";
	}
	return gap;
}

//Sort an array of numbers in ascending order
function numSort(arr, order) {
	//Method 1

	(function sortNum() {
		let sorted = true;
		for (let i = 0; i < arr.length; i++) {
			if (order === "-") {
				if (arr[i + 1] > arr[i]) {
					const temp = arr[i];
					arr[i] = arr[i + 1];
					arr[i + 1] = temp;
					sorted = false;
				}
			} else if (order === "+") {
				if (arr[i + 1] < arr[i]) {
					const temp = arr[i];
					arr[i] = arr[i + 1];
					arr[i + 1] = temp;
					sorted = false;
				}
			} else return arr;
		}
		if (!sorted) {
			sorted = true;
			sortNum(arr);
		}
	})();
	return arr;

	//Method 2
	// let obj = Object.assign({}, arr);
	// (function sortNum() {
	// 	let sorted = true;
	// 	for (let i = 0; i < arr.length; i++) {
	// 		if (order === "-") {
	// 			if (obj[i + 1] > obj[i]) {
	// 				const temp = obj[i];
	// 				obj[i] = obj[i + 1];
	// 				obj[i + 1] = temp;
	// 				sorted = false;
	// 			}
	// 		} else if (order === "+") {
	// 			if (obj[i + 1] < obj[i]) {
	// 				const temp = obj[i];
	// 				obj[i] = obj[i + 1];
	// 				obj[i + 1] = temp;
	// 				sorted = false;
	// 			}
	// 		} else return Array.from(Object.values(obj));
	// 	}
	// 	if (!sorted) {
	// 		sorted = true;
	// 		sortNum();
	// 	}
	// })();
	// return Array.from(Object.values(obj));
}

//Rotate the elements of a given array n times
function rotateArray(arr, n) {
	//Method One
	if (arr && typeof n === "number") {
		if (n >= arr.length) n = n % arr.length;
		if (n > 0 && n <= 100 && arr.length >= 1 && arr.length <= 100) {
			let frag = arr.splice(arr.length - n);

			return frag.concat(arr);
		}
	}
	return arr;

	//Method Two
	// if (arr && typeof n === "number") {
	// 	if (n >= arr.length) n = n % arr.length;
	// 	if (n > 0 && n <= 100 && arr.length >= 1 && arr.length <= 100) {
	// 		rotate();
	// 		function rotate() {
	// 			let temp = arr[arr.length - 1];
	// 			for (let i = arr.length - 1; i > 0; i--) {
	// 				arr[i] = arr[i - 1];
	// 			}
	// 			arr[0] = temp;

	// 			n--;
	// 			if (n > 0) rotate();
	// 		}
	// 		return arr;
	// 	}
	// }
	// return arr;
}
//Return the unpaired element in an unsorted array
function unpaired(arr) {
	let set = new Set();
	for (let i = 0; i < arr.length; i++) {
		if (set.has(arr[i])) set.delete(arr[i]);
		else set.add(arr[i]);
	}
	for (const val of set) {
		return val;
	}
}

//Replaces a string with a new string from the first argument (a string)
function replaceStr(str, oldStr, newStr) {
	return (function repl() {
		let oldStrUpper = oldStr.charAt(0).toUpperCase() + oldStr.slice(1),
			oldStrLower = oldStr.charAt(0).toLowerCase() + oldStr.slice(1);

		let oldStrIndex =
			str.indexOf(oldStrUpper) === -1
				? str.indexOf(oldStrLower)
				: str.indexOf(oldStrUpper);
		if (oldStrIndex === -1) return str;

		if (str[oldStrIndex] === str[oldStrIndex].toUpperCase()) {
			newStr = newStr.charAt(0).toUpperCase() + newStr.slice(1);
			return str.replace(oldStrUpper, newStr);
		} else {
			newStr = newStr.charAt(0).toLowerCase() + newStr.slice(1);
			return str.replace(oldStrLower, newStr);
		}
	})();
}

function sortText(str) {
	// needs improvement
	(newStr = ""), (numArr = []);
	for (let i = 0; i < str.length; i++) {
		numArr.push(str.charCodeAt(i));
	}
	numArr.sort((a, b) => a - b);
	numArr.forEach((num) => {
		newStr += String.fromCharCode(num);
	});
	return newStr;
}

let result = sortText("goodness");
console.log(result);
