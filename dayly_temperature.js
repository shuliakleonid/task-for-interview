/**
 * Given an array of integers temperatures represents the daily temperatures,
 * return an array answer such that answer[i] is the number of days you have to wait after the ith day
 * to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.
 * Input: temperatures = [73,74,75,71,69,72,76,73]
 * Output: [1,1,4,2,1,1,0,0]
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const legthOfTemperatures = temperatures.length
    let dayTemperatureIndex = 0
    let hotestDayTemperature = 0
    const result = []
    let countDay = 0

    while(dayTemperatureIndex < legthOfTemperatures   && hotestDayTemperature < legthOfTemperatures){
        if(temperatures[dayTemperatureIndex] < temperatures[hotestDayTemperature]){
            countDay++
            result.push(countDay)
            dayTemperatureIndex++
            hotestDayTemperature++
            countDay = 0
            continue
        }
        if(temperatures[dayTemperatureIndex] > temperatures[hotestDayTemperature]){
            // countDay = 0
            countDay++
            hotestDayTemperature++
            // hotestDayTemperature = dayTemperatureIndex
        }
        if(temperatures[dayTemperatureIndex] === temperatures[hotestDayTemperature]){
            hotestDayTemperature++

        }
    }
    return result
        };
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
