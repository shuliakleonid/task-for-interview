/**Реализовать функцию getMoney для банкомата, выдающего купюры.
 На входе - сумма.
 На выходе - объект с количеством купюр по каждому номиналу.
 Бизнес требования:

 1) Банкомат должен выдать минимальное количество банкнот.

 2) Доступные номиналы: 50, 100, 500, 1000, 5000 руб.
 Потенциально может быть добавлено любое количество номиналов (натуральных чисел).

 3) Если мы не можем полностью разменять сумму, то нужно вернуть ошибку.

 Пример: getMoney(6200) // return { 5000: 1, 1000: 1, 500: 0, 100: 2, 50: 0 }

 ДОПОЛНИТЕЛЬНЫЕ УСЛОВИЯ (опционально):
 Реализовать возможность прокинуть 2ым аргументом объект вида { 5000: 0, 1000: 3 },
 в котором бы содержалось максимальное для выдачи количество купюр какого-либо номинала.
 */

// Вариант 1
function getMoney(amount) {
    const banknotes = [5000, 1000, 500, 100, 50];
    const result = {};

    for (let i = 0; i < banknotes.length; i++) {
        const banknote = banknotes[i];
        const count = Math.floor(amount / banknote)

        amount = amount - count * banknote
        result[banknote] = count;
    }
    if (amount !== 0) {
        return 'Не возможно разменять сумма'
    }
    return result;
}

const t2 = [
    {i: 6500, o: {5000: 1, 1000: 1, 500: 1, 100: 0, 50: 0}},
    {i: 0, o: {5000: 0, 1000: 0, 500: 0, 100: 0, 50: 0}},
    {i: 4352, o: 'Не возможно разменять сумма'},
];
for (const test of t2) {
    const res = getMoney(test.i);

    console.log(res, 'expected', test.o);
}


// Вариант 2
function getMoney2(amount,maxNotes={}) {
    const banknotes = [5000, 1000, 500, 100, 50];
    const result = {};

    for (let i = 0; i < banknotes.length; i++) {
        const banknote = banknotes[i];
        const maxNoteCount = maxNotes[banknote] || Infinity;
        const count = Math.min(Math.floor(amount / banknote), maxNoteCount);
            result[banknote] = count;
            amount -= banknote * count;
    }
    if (amount !== 0) {
        return 'Не возможно разменять сумма'
    }
    return result;
}
const testCases = [
    { input: 6500, maxNotes: {}, expected: { 5000: 1, 1000: 1, 500: 1, 100: 0, 50: 0 } },
    { input: 0, maxNotes: {}, expected: { 5000: 0, 1000: 0, 500: 0, 100: 0, 50: 0 } },
    { input: 4352, maxNotes: {}, expected: 'Не возможно разменять сумма' },
    { input: 4000, maxNotes: { 1000: 2 }, expected: { 5000: 0, 1000: 2, 500: 4, 100: 0, 50: 0 } },
];

for (const { input, maxNotes, expected } of testCases) {
    const result = getMoney2(input, maxNotes);

    console.log(result, 'expected', expected);
}
