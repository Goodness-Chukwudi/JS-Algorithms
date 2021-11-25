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

//Return objects in an array of aobjects that has matching key value pair with the provided argument
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

const result = matchingObjects(
	[
		{ first: "Romeo", last: "Montague" },
		{ first: "Mercutio", last: null },
		{ first: "Tybalt", last: "Capulet" },
	],
	{ last: "Capulet" }
);

console.log(result);
