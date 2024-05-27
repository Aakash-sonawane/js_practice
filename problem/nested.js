let outputArray = [];
let arr=[1, [2,3],[4,5]]
for (const el of arr) {
	// el is either a normal element or an array	
	if (Array.isArray(el)) {
		outputArray = outputArray.concat(el);
	} else {
		// el is not an array
		outputArray.push(el);
  }
}

let newar=arr.flat(Infinity)
console.log(outputArray);
console.log(arr);
console.log(newar);