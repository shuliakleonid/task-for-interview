// Необходимо обработать массив таким образом, чтобы распределить людей по группам городов

// Данные на вход
const peoples = [
    {
        name: 'Alex',
        city: 'Moscow',
    },
    {
        name: 'Ivan',
        city: 'Moscow',
    },
    {
        name: 'Joe',
        city: 'New York'
    },
    {
        name: 'Johan',
        city: 'Berlin'
    },
]

const groupByCity = (array) => {
    const result = {}
    for (const {city, name} of peoples) {
        if (!result[city]) {
            result[city] = []
        }
        result[city].push(name)
    }
    return result
}
console.log(groupByCity(peoples))

// Данные на выход
/*
{
  'Moscow': [ 'Alex', 'Ivan' ],
  'New York': 'Joe',
  'Berlin': 'Johan'
}
*/

