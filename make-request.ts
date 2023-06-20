/**
 * Задача: Напиши функцию makeReq получающую на вход массив ссылок и число указывающее максимальное количество
 * одновременных запросов. Условия одновременно должно выполняться не более указанного числа.JS
 * @param {string[]} links
 * @param {number} maxRequests
 * */

function makeReq(links, maxRequests) {
  const results = []
  let currentIndex = 0
  let activeRequests = 0

  // @ts-ignore
  return new Promise((resolve, reject) => {
    function runNextRequest() {
      if (currentIndex >= links.length && activeRequests === 0) {
        resolve(results)
        return
      }

      while (activeRequests < maxRequests && currentIndex < links.length) {
        const link = links[currentIndex]
        currentIndex++
        activeRequests++

        fetch(link)
          .then(response => response.json())
          .then(data => {
            results.push(data)
            activeRequests--
            runNextRequest()
          })
          .catch(error => {
            reject(error)
          })
      }
    }

    runNextRequest()
  })
}

const links = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3',
  'https://jsonplaceholder.typicode.com/todos/4',
  'https://jsonplaceholder.typicode.com/todos/5']
makeReq(links, 2)
  .then(results => {
    console.log(results)
  })
  .catch(error => {
    console.error(error)
  })
/**Как работает функция:
 Создается массив results, в который будут добавляться результаты запросов.
 Устанавливаются начальные значения переменных currentIndex и activeRequests равными 0.
 Создается новый Promise с помощью конструктора Promise.
 Внутри Promise создается функция runNextRequest(), которая выполняет запросы на сервер и добавляет результаты в массив results.
 Если все запросы были выполнены и количество активных запросов равно 0, Promise разрешается с помощью метода resolve.
 Иначе, пока количество активных запросов не превышает максимальное количество запросов maxRequests и не достигнут конец массива links, функция runNextRequest() выполняет запросы на сервер с помощью функции fetch().
 Когда результаты всех запросов будут добавлены в массив results, выполнение функции runNextRequest() продолжается, и следующий запрос начинает выполняться.
 Если во время выполнения запросов произойдет ошибка, то Promise отклоняется с помощью метода reject, и будет выведено сообщение об ошибке.
 Функция makeReq() возвращает созданный Promise.
 */
