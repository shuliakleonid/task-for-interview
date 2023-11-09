// Объект на вход
const object = {
    a: {
        d: {
            h: 4
        },
        e: 2
    },
    b: 1,
    c: {
        f: {
            g: 3,
            k: {}
        }
    }
};

const addLevels = (obj) => {
    const newObj = structuredClone(obj)
    const stack = [{obj: newObj, level: 0}]

    while (stack.length > 0) {
        const {obj, level} = stack.pop()

        for (const key in obj) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                obj[key].level = level + 1;
                stack.push({obj: obj[key], level: level + 1});
            }
        }
    }
    newObj.level = 0
    return newObj
}
console.log(addLevels(object));
// Данные на выход
/*
updatedObject {
  a: { d: { h: 4, level: 2 }, e: 2, level: 1 },
  b: 1,
  c: { f: { g: 3, k: [Object], level: 2 }, level: 1 },
  level: 0
}*/

// Object { a: { d: { h: 4 }, e: 2 }, b: 1, c: { f: { g: 3, k: {} } } }
