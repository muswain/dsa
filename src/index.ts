interface Router {
  addRoute(path: string, result: string): void;
  callRoute(path: string): string;
}

export class APIRouter implements Router {
  private routes: Map<string, string>;

  constructor() {
    this.routes = new Map();
  }
  public callRoute(path: string): string {
    if (this.routes.has(path)) {
      return this.routes.get(path) as string;
    } else {
      for (const [registeredRoute] of this.routes.entries()) {
        if (registeredRoute.includes('*')) {
          const regex = new RegExp('^' + registeredRoute.replace(/\*/g, '(.+)') + '$');

          if (regex.test(registeredRoute)) {
            return this.routes.get(registeredRoute) as string;
          }
        }
      }

      throw new Error('No route found');
    }
  }

  public addRoute(path: string, result: string) {
    if (!this.routes.has(path)) {
      this.routes.set(path, result);
    }
  }
}

/**
 * Finds the contiguous subarray with the largest sum.
 *
 * @param arr An array of numbers.
 * @returns The maximum sum of a contiguous subarray within the input array.
 */
const maxSubarraySum = (arr: number[]): number => {
  let maxSoFar = -Infinity; // We start it at negative infinity to handle cases where the array contains only negative numbers (in which case, the maximum subarray would be the single largest negative number)
  let currentMax = 0;

  for (const item of arr) {
    currentMax = Math.max(item, currentMax + item);
    maxSoFar = Math.max(maxSoFar, currentMax);
  }

  return maxSoFar;
};

// Example usage:
const numbers: number[] = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSum: number = maxSubarraySum(numbers);
console.log('Maximum subarray sum:', maxSum); // Output: 6

// finding the longest consecutive sequence
const longestConsecutiveSequenceSet = (nums: number[]): number[] => {
  const numSet = new Set(nums);
  let longestSequence: number[] = [];

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentSequence: number[] = [currentNum];

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentSequence.push(currentNum);
      }

      if (currentSequence.length > longestSequence.length) {
        longestSequence = currentSequence;
      }
    }
  }

  return longestSequence;
};

// Example usage:
const numbers2 = [100, 4, 200, 1, 3, 2];
const longest2 = longestConsecutiveSequenceSet(numbers2);
console.log(`Longest consecutive sequence (set):`, longest2); // Output: [1, 2, 3, 4]
