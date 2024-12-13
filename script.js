const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let sum = 0;
	const lists = [];
	let result = [];
	arr.forEach(a => {
		if (sum + a <= n) {
			result.push(a);
			sum += a;
		} else {
			lists.push(result);
			result = [];
			result.push(a);
			sum = a;
		}
	});
	lists.push(result);
	return lists;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));