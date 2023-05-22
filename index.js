const coffeeMenu = require('./coffee_data.js')

const coffeeNames = []
function drinkNames (objArray) { 
    for (let i = 0; i < objArray.length; i++){
        let coffeeName = objArray[i].name
        coffeeNames.push(coffeeName)
    } return coffeeNames
}
console.log(drinkNames(coffeeMenu))

const fiveBelowDrinks = []
function filterFiveBelow (objArray) {
    for (let i = 0; i < objArray.length; i++) {
        let coffeePrice = objArray[i].price
        let coffeeName = objArray[i].name
        if (coffeePrice <= 5) {
            fiveBelowDrinks.push(coffeeName)
        }
    } return fiveBelowDrinks
}
console.log(filterFiveBelow(coffeeMenu))

const evenPriceDrinks = []
function filterEvenPrice (objArray) {
    for (let i = 0; i < objArray.length; i++) {
        let coffeePrice = objArray[i].price
        let coffeeName = objArray[i].name
        if (coffeePrice % 2 === 0) {
            evenPriceDrinks.push(coffeeName)
        }
    } return evenPriceDrinks
}
console.log(filterEvenPrice(coffeeMenu))

let sumPrice = 0
function totalPrice (objArray) {
    for (let i = 0; i < objArray.length; i++) {
       sumPrice = objArray[i].price + sumPrice
    } return `The cost of one of every drink is $${sumPrice}.`
}
console.log(totalPrice(coffeeMenu))

const seasonalDrinkList = []
function seasonalDrinks (objArray) {
    for (let i = 0; i < objArray.length; i++) {
        let coffeeSeasonal = objArray[i].seasonal
        let coffeeName = objArray[i].name
        if (coffeeSeasonal)
        //seasonalDrinkList.push(coffeeName)
        seasonalDrinkList.push(`${coffeeName} with imported beans`)
    } return seasonalDrinkList
}
console.log(seasonalDrinks(coffeeMenu))
