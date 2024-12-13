const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const result = []; // This will hold the final subarrays
    let currentSubarray = []; // This will hold the current subarray
    let currentSum = 0; // This will track the sum of the current subarray

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];

        // Check if adding the current number exceeds the maximum sum
        if (currentSum + num > n) {
            // If it does, push the current subarray to the result
            result.push(currentSubarray);
            // Start a new subarray with the current number
            currentSubarray = [num];
            currentSum = num; // Reset the current sum to the current number
        } else {
            // If it doesn't exceed, add the number to the current subarray
            currentSubarray.push(num);
            currentSum += num; // Update the current sum
        }
    }

    // After the loop, we need to add the last subarray if it exists
    if (currentSubarray.length > 0) {
        result.push(currentSubarray);
    }

    return result;
};

// const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
