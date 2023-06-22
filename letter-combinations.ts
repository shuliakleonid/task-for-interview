/**
 * На вход функции подается строка, состоящая из цифр 2-9 и 0
 * Каждая цифра соотносится с одной или несколькими буквами,
 * расположенными на клавиатуре мобильного телефона
 * Составьте все возможные комбинации букв, которые можно получить
 * при данной последовательности цифр
 * 1: <none>  2: abc     3: def
 * 4: ghi     5: jkl     6: mno
 * 7: pqrs    8: tuv     9: wxyz
 * *: +       0: <space> #: <none>
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits: string): string[] {
 if(!digits.length)  return [];

  const lettersMap: { [key: string]: string } = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
    '0': ' ',
  };
  const result: string[] = [];

  function backtrack(combination: string, nextDigits: string) {
    if (!nextDigits.length) {
      result.push(combination);
    } else {
      const letters = lettersMap[nextDigits[0]];
      for (let i = 0; i < letters.length; i++) {
        backtrack(combination + letters[i], nextDigits.slice(1));
      }
    }
  }
  backtrack('', digits)





}
const task3Cases = [
  {
    input: '',
    output: [],
  },
  {
    input: '2',
    output: ['a', 'b', 'c'],
  },
  {
    input: '42',
    output: ['ga', 'gb', 'gc', 'ha', 'hb', 'hc', 'ia', 'ib', 'ic'],
  },
  {
    input: '790',
    output: [
      'pw ',
      'px ',
      'py ',
      'pz ',
      'qw ',
      'qx ',
      'qy ',
      'qz ',
      'rw ',
      'rx ',
      'ry ',
      'rz ',
      'sw ',
      'sx ',
      'sy ',
      'sz ',
    ],
  },
];
for (const testCase of task3Cases) {
  const res = letterCombinations(testCase.input);
  const valid = res.sort().toString() === testCase.output.toString();
  console.log(testCase.input, valid);
}
