export const algorithmsQA = [
  {
    keywords: ["Two Sum"],
    answer: `function twoSum(arr, target) { let map = {}; for (let i = 0; i < arr.length; i++) { let diff = target - arr[i]; if (map[diff] !== undefined) { return [map[diff], i]; } map[arr[i]] = i; } }`,
  },
  {
    keywords: ["Reverse an Array"],
    answer: `function reverseArray(arr) { let result = []; for (let i = arr.length - 1; i >= 0; i--) { result.push(arr[i]); } return result; }`,
  },
  {
    keywords: ["Duplicate Elements"],
    answer: `function findDuplicates(arr) { let seen = new Set(); let duplicates = new Set(); for (let num of arr) { if (seen.has(num)) { duplicates.add(num); } else { seen.add(num); } } return [...duplicates]; }`,
  },
];
