const arr = [1123, 124, 12467, 3, 6, 8545, 8685, 34, 45646, 46, 34257, 4];

const sortedArr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25];

const binarySearch = (arr, value) => {
  // O(logn) - логарифм

  let start = 0;
  let end = arr.length - 1;
  let middle = Math.round(arr.length / 2);

  while (start <= end) {
    middle = Math.floor((end + start) / 2);

    if (value === arr[middle]) {
      return middle;
    }
    if (value > arr[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  // TODO: Если элемент не найден: return -1
  return -1;
};

const linearSearch = (arr, value) => {
  // O(n) - linear
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }

  return -1;
};

const multuplyTable = (count) => {
  // O(n^2) - квадратичная
  const table = [];
  for (let i = 1; i < count; i++) {
    for (let j = 1; j < count; j++) {
      table.push(`${i} * ${j} = ${i * j}`);
    }
  }

  return table;
};
