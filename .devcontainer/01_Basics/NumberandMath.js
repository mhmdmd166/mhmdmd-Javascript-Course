//Number → deals with number itself
//Math → performs operations on numbers
let value =100
let score=Number(value)
console.log(score)
console.log(score.toFixed(2))
let balance=new Number(value)
console.log(balance)
const othernumber = 345.890
console.log(othernumber.toPrecision(3))//return string

let num = 100000000
console.log(num.toLocaleString('en-IN'))

console.log(num.toLocaleString('en-PK'))
/*
Format → toFixed(), toPrecision()
Convert → Number(), parseInt(), parseFloat()
Check → isNaN(), isFinite(), isInteger()
*/

//++++++++++++++++++++++++Math+++++++++++

let profit = -25
console.log(Math.abs(profit))
let deci = 5.4
console.log(Math.round(deci))
console.log(Math.ceil(deci))
console.log(Math.floor(deci))

// random give value between o to 1
console.log((Math.random()*10)+1)
const min =10
const max =20
console.log(Math.floor(Math.random()*(max-min+1))+min)