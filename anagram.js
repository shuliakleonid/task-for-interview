/**
Дан массив строк, нужно сгруппировать в нем анаграммы.
  Важно, что это нужно сделать максимально эффективно по памяти и времени.
  Слово X является анаграммой слова Y, если оно может быть
получено из другого перестановкой букв. /

groupAnagrams(['сон', 'нос', 'сорт', 'трос', 'торт', 'рост']);
 возвращает
[
  ['сон', 'нос'],
  ['сорт', 'трос', 'рост']],
 ['трос']
 ]
 */
const groupAnagrams = (arr) => {
  const map = new Map();

  for(let i  = 0; i < arr.length; i++){
    const sortedWord = arr[i].split('').sort().join('');
    if(map.has(sortedWord)){
      map.get(sortedWord).push(arr[i]);
    }else{
      map.set(sortedWord,[arr[i]])
    }
  }
  return  Array.from(map.values());
}

const t2 = [
  { i: ['сон', 'нос', 'сорт', 'трос', 'торт', 'рост'], o: [['сон', 'нос'], ['сорт', 'трос', 'рост'],['торт']] },
  { i: [], o: [] },
  { i: ['cat', 'tac', 'dog', 'god', 'cat'], o: [['cat', 'tac','cat'], ['dog', 'god']] },
];
for (const test of t2) {
  const res = groupAnagrams(test.i);

  console.log(res,'expected',test.o );
}
