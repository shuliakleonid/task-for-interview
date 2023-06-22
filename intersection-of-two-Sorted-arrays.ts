/**
 Есть два сортированных массива с числами.
 Числа отсортированы, но могут повторяться.
 Нужно написать функцию, которая возвращает новый массив,
 содержащий элементы, которые встречаются в обоих массивах.
*/

const a = [ 1, 2, 4, 7, 11, 19 ];
const b = [ 2, 7, 19, 28, 31 ];
function intersection(a, b) {
  const result = [];

  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      result.push(a[i]);
      i++;
      j++;
    } else if (a[i] < b[j]) {
      i++;
    } else {
      j++;
    }
  }

  return result;
}

{
const a = [1, 2, 4, 7, 11, 19];
const b = [2, 7, 19, 28, 31];

const result = intersection(a, b);
  const result1 = intersection([1, 2, 3], [2]); // => [2]
  const result2 = intersection([2], [1, 2, 3]); // => [2]
  const result3 = intersection([1, 2, 3], [2, 2, 2, 2]); // => [2, 2] //

  intersection([1, 2, 2, 2, 2, 3], [2, 2, 2, 2, 2]); // => [2, 2, 2, 2]
console.log(result); // [2, 7, 19]
console.log(result1); // [2, 7, 19]
console.log(result2); // [2, 7, 19]
console.log(result3); // [2, 7, 19]
 }
