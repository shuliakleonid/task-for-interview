/**
 * Реализуйте функцию-шпиона spy, которая работает следующим образом:
 * принимает на вход любую функцию, например:
 * function foo(a) { return a; }
 * const spyFoo = spy(foo);
 * и может следить за ее вызовами
 * spyFoo('test');
 * test spyFoo.calledWith('test'); //true
 * spyFoo.calledWith('test123'); // false
 * spyFoo.returned('test');// "test"
 * spyFoo.callCount();//1
 * которая может следить за вызовами функции,
 * запоминать переданные аргументы,
 * отслеживать возвращаемые значения
 * и подсчитывать количество вызовов
 * */

function spy(fn) {
    let callCount = 0;
    const calledWithArgs = []
    let returnedValue;

    function spyFn(...args) {
        callCount++;
        calledWithArgs.push(args)
        const result = fn.apply(this, args)
        returnedValue = result
        console.log("-> result", result);
        return result
    }

    spyFn.calledWith = function(...args){
        const argsString = JSON.stringify(args)
        const called = calledWithArgs.some((calledArgs) => JSON.stringify(calledArgs) === argsString)
        console.log("-> called", called);
        return called

    }

    spyFn.returned = function (...args){
        const returned = returnedValue === args.join('')
        console.log("-> returned", returned);
        return returned
    }

    spyFn.callCount = function () {
        console.log("-> callCount", callCount);
        return callCount
    }



    return spyFn
}
function foo(a, b ) {
    return a + b
}

const spyFoo = spy(foo);
spyFoo('test', ' this')
spyFoo.calledWith('test', ' this')
spyFoo.returned('test', ' this')
spyFoo.callCount()
