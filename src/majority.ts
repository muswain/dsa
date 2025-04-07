// Given an array arr. Find the majority element in the array.
// If no majority exists, return -1. A majority element in an array is an element that appears strictly more than arr.size() / 2 times in the array.
export const majority = (arr: number[]) => {
  if (arr.length === 0) {
    return -1;
  }

  let n = arr.length;

  // Loop to consider each element as a candidate for majority
  for (let i = 0; i < n; i++) {
    let count = 0;

    // Inner loop to count the frequency of arr[i]
    for (let j = 0; j < n; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    // Check if count of arr[i] is more than half the size of the array
    if (count > n / 2) {
      return arr[i];
    }
  }

  // If no majority element found, return -1
  return -1;
};

export const majority1 = (arr: number[]) => {
  if (arr.length === 0) {
    return -1;
  }

  const frequencyMap: { [key: number]: number } = {};
  const majorityThreshold = Math.floor(arr.length / 2);

  for (const num of arr) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    if (frequencyMap[num] > majorityThreshold) {
      return num;
    }
  }

  // If no majority element found, return -1
  return -1;
};
