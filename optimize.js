const ARR_LENGTH = 1000000;

// original function
export function find1(index) {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  return a[index];
}

// optimization 1: allocate the array upfront in order to avoid unnecessary array allocations array allocations
export function find2(index) {
  let a = new Array(ARR_LENGTH);
  for (let i = 0; i < ARR_LENGTH; i++) {
    a[i] = i * i;
  }
  return a[index];
}

// optimization 2: use a factory function to avoid recreating the array every time the function is called
export function createFind() {
  let a = [];
  for (let i = 0; i < ARR_LENGTH; i++) {
    a[i] = i * i;
  }

  return function find(index) {
    return a[index];
  };
}
