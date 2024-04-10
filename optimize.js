// original function
export function find1(index) {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  return a[index];
}

// optimization 1: allocate the array upfront
export function find2(index) {
  let a = new Array(1000000);
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  return a[index];
}

// alternatively, if we can assume the length of the array will not be larger than the index, we can avoid pupulating the array for greter values than index
export function find3(index) {
  const arrayLength = index + 1;

  let a = new Array(arrayLength);
  for (let i = 0; i < arrayLength; i++) {
    a[i] = i * i;
  }
  return a;
}

// if we can assume that this function is a simple calculation, we do not even need to allocate the array
export function find4(index) {
  return index * index;
}
