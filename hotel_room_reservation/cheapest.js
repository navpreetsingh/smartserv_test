'use strict';

const hotels = require("./default.js").hotels
let inputs = require("./input.js").inputs

var cleaner = (arg) => {
    let tempOutput = arg.split(":"),
    tempOutputDates = tempOutput[1].split(","),
    tempListDates = []
    const datePattern = /^\s?(\d{1,2})(\w{3})(\d{4})\((\w{3,4})\)\s?$/;
    tempOutputDates.forEach((v,i) => {
        let tempDateArray = datePattern.exec(v.trim()).splice(1,5),
        fullDate = tempDateArray.slice(0,3).join(" "),
        tempDate = {
            fullDate: fullDate,
            // date: tempDateArray[0],
            // month: tempDateArray[1],
            // year: tempDateArray[2],
            // dayOfWeek: tempDateArray[3],
            day: new Date(fullDate + " GMT+00:00").getDay() 
        }
        tempListDates.push(tempDate)
    })
    let output = {
        type: tempOutput[0].toLowerCase().trim(),
        dates: tempListDates
    }
    return output
}

var hotelCost = (data) => {
    let type = data["type"],
    dates = data["dates"],
    output = {}

    hotels.map(v => {
        output[v['name']] = {
            rating: v['rating'],
            sum: 0,
        }
    })
    // console.log("Initial Cheapest Output: " + JSON.stringify(output))
    dates.forEach((v,i) => {
        let key = v['day'] == 0 || v['day'] == 6 ? 'weekend' : 'weekday'
        hotels.forEach((hotel, hIndex) => {
            output[hotel['name']]['sum'] += hotel['rates'][type][key]
        })
        // console.log("Final Cheapest Output at Index %i is : %s", i, JSON.stringify(output))
    })
    // console.log("Final Cheapest Output: " + JSON.stringify(output))
    return output
}


var cheapest = function(argument) {
    // console.log("Arguments received are %s", argument)
    let cleanedData = cleaner(argument)
    // console.log("Cleaned Data: " + JSON.stringify(cleanedData))
    let hcost = hotelCost(cleanedData),
    cheapestHotel = '', sum
    // console.log("Hotel Cost Data: " + JSON.stringify(hcost))
    Object.keys(hcost).forEach((v,i)=> {
        if(i == 0){
            sum = hcost[v]['sum']
            cheapestHotel = v
        }
            
        else {
            if(sum >= hcost[v]['sum']){
                sum = hcost[v]['sum']
                cheapestHotel = v
            }
        }

    })
    return [cheapestHotel, sum]
    
}
if(process.argv.slice(2).length > 0){
    inputs = process.argv.slice(2)
    // console.log(inputs)
}
    


inputs.forEach((v,i) => {
    let result = cheapest(v)
    console.log("\nCheapest Hotel for Input: " + v + " is %s at %s \n", result[0], result[1])
    // console.log(result[0])
    return result[0]
})


module.exports = cheapest;