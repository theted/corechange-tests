export const getMaximumDiff = (nums) => {
  // ensure that input is an non-empty array of numbers
  if (
    !Array.isArray(nums) ||
    !nums.length ||
    nums.some((num) => typeof num !== "number")
  ) {
    throw new Error("Expected an array of numbers");
  }

  const max = Math.max(...nums);
  const min = Math.min(...nums);

  return max - min;
};

// alternative implementation

const getMax = (nums) => {
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  return max;
};

const getMin = (nums) => {
  let min = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
  }
  return min;
};

export const getMaximumDiffAlternative = (nums) => {
  // ensure that input is an non-empty array of numbers
  if (
    !Array.isArray(nums) ||
    !nums.length ||
    nums.some((num) => typeof num !== "number")
  ) {
    throw new Error("Expected an array of numbers");
  }

  const max = getMax(nums);
  const min = getMin(nums);

  return max - min;
};
