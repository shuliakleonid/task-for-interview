/**
 * Есть массив операций.
 Необходимо операции отсортировать по дате и сгруппировать их по году, а в качестве
 значений представить массивы c датами в формате MM-DD.
 Пример результата:
 result = {
 "2017": [ "07-31", "08-22" ],
 "2018": [ "01-01", "02-22" ]
 }
 const operations = [
 { "date": "2017-07-31", "amount": "5422" },
 { "date": "2017-06-30", "amount": "5220" },
 { "date": "2017-05-31", "amount": "5365" },
 { "date": "2017-08-31", "amount": "5451" },
 { "date": "2017-09-30", "amount": "5303" },
 { "date": "2018-03-31", "amount": "5654" },
 { "date": "2017-10-31", "amount": "5509" },
 { "date": "2017-12-31", "amount": "5567" },
 { "date": "2018-01-31", "amount": "5597" },
 { "date": "2017-11-30", "amount": "5359" },
 { "date": "2018-02-28", "amount": "5082" },
 { "date": "2018-04-14", "amount": "2567" }
 ];
 function sortOperations(operations) {
 // код функции здесь
 }
 */

const operations = [
    {"date": "2017-07-31", "amount": "5422"},
    {"date": "2017-06-30", "amount": "5220"},
    {"date": "2017-05-31", "amount": "5365"},
    {"date": "2017-08-31", "amount": "5451"},
    {"date": "2017-09-30", "amount": "5303"},
    {"date": "2018-03-31", "amount": "5654"},
    {"date": "2017-10-31", "amount": "5509"},
    {"date": "2017-12-31", "amount": "5567"},
    {"date": "2018-01-31", "amount": "5597"},
    {"date": "2017-11-30", "amount": "5359"},
    {"date": "2018-02-28", "amount": "5082"},
    {"date": "2018-04-14", "amount": "2567"}
];


function sortOperations(operations) {
    operations.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
    })

    let result = {};
    for (const date of operations) {
        const year = date.date.split('-')[0];
        const month = date.date.split('-')[1];
        const day = date.date.split('-')[2];
        result[year] = result[year] || [];
        result[year].push(`${month}-${day}`);
    }
    return result
}

console.log(sortOperations(operations));;
