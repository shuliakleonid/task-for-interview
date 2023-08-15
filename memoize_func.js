/**
 * Реализовать функцию мемоизации(упрощенную -допустим что в аргументах функции всегда простые типы данных)
 * // Пример использования
 *
 * function add(a, b) {
 *     console.log('Calculating sum...');
 *     return a + b;
 * }
 *
 * const memoizedAdd = memoize(add);
 *
 * console.log(memoizedAdd(2, 3)); // Вычисляется
 * console.log(memoizedAdd(2, 3)); // Берется из кеша
 * console.log(memoizedAdd(4, 5)); // Вычисляется
 * console.log(memoizedAdd(2, 3)); // Берется из кеша*/
function memoize(func) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            console.log('From Cache:', key);
            return cache[key];
        }

        const result = func(...args);
        cache[key] = result;
        return result;
    };
}

