// Question (01)

var userInput = +prompt("Enter a Possitive Numbers")

console.log("Number: " + userInput)
console.log("floor value " + Math.round(userInput))
console.log("floor value " + Math.floor(userInput))
console.log("ceil value " + Math.ceil(userInput))



// Question (02)

var userInput1 = +prompt("Enter a Negative Numbers")

console.log("Number: " + userInput1)
console.log("floor value " + Math.round(userInput1))
console.log("floor value " + Math.floor(userInput1))
console.log("ceil value " + Math.ceil(userInput1))



// Question (03)

var userInput2 = +prompt("Enter a Possitive floating numbers")

console.log("Number: " + userInput2)
console.log("floor value " + Math.round(userInput2))
console.log("floor value " + Math.floor(userInput2))
console.log("ceil value " + Math.ceil(userInput2))



// Question (04)

var userInput3 = +prompt("Enter a Negative floating numbers")

console.log("Number: " + userInput3)
console.log("floor value " + Math.round(userInput3))
console.log("floor value " + Math.floor(userInput3))
console.log("ceil value " + Math.ceil(userInput3))



// Question (05)

var userInput4 = +prompt("Enter a number for Absolute value")

console.log("The Absolute value of: " + userInput4 + " is " + Math.abs(userInput4))



// Question (06)

var diceValue = Math.floor(6 * Math.random() + 1)

console.log(diceValue)



// Question (07)

var coinValue = Math.floor(2 * Math.random() + 1)

if (coinValue === 2) {
    alert(coinValue + " Random coin value: Head")
} else if (coinValue === 1) {
    alert(coinValue + " Random coin value: Tail")
}



// Question (08)

var ran = Math.floor(100 * Math.random() + 1)

console.log("Random number between 1 to 100: " + ran)



// Question (09)

var kg = prompt("Enter your weight")
kg = kg.toLowerCase()
var weight = kg.split("k")

console.log("Your weight is " + weight[0] + " Kilograms")



// Question (10)

var secNum = Math.floor(Math.random() * 10)
var numInput = +prompt("Enter a number between 1 and 10")

if (numInput === secNum) {
    alert("Congratulations!")
} else {
    alert("Please try again")
}



// Question (11)

alert(new Date())



// Question (12)

var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var date = new Date()
var curMonth = date.getMonth()

alert(month[curMonth])



// Question (13)

var day = prompt("Enter day")

day = day.slice(0, 3)

alert(day)



// Question (14)

var day = prompt("Enter day")
day = day.toLocaleLowerCase()

if (day === "sunday" || day === "sataurday") {
    alert("It's fun day")
} else {
    alert("Go to work")
}



// Question (15)

var date = +prompt("Enter date")

if (date === 1 && date <= 15) {
    alert("First fifteen days of month")
} else if (date > 15 && date <= 31) {
    alert("Last fifteen days of month")
} else {
    alert("Please enter correct date")
}



// Question (16)

var myDate = new Date();
var oldDate = new Date(01 / 01 / 70);
var min = myDate.getFullYear() - oldDate.getFullYear();

alert("elapsed minutes since 1970 :" + min * 365 * 24 * 60);
alert("elapsed miliseconds since 1970 :" + min * 365 * 24 * 60 * 60)



// Question (17)

var currTime = new Date()

currTime = currTime.getHours()
if (currTime <= 12) {
    alert("It's AM")
} else {
    alert("It's PM")
}



// Question (18)

var laterDate = new Date("06/18/15")
var sec = new Date - laterDate

day = sec / (24 * 60 * 60 * 1000)



// Question (19)

var a = new Date()
var b = new Date(04 / 25 / 21)
var c = a - b

console.log(c / (1000 * 60 * 60 * 24))



// Question (20)

var pastDate = new Date("jan 1,2015")
var newDate = new Date("dec 5, 2015")
var days = newDate.getTime() - pastDate.getTime()
var day1 = days / (1000 * 3600 * 24)
var finalTime = day1 * 86400

alert(
    "on the reference date : " + newDate + "\n" + finalTime + " seconds had passed since the beinning of 2015"
)


// Question (21)

var checkTime = new Date();
var oneYr = new Date();
var oldYear = oneYr.setHours(oneYr.getHours() - 1);
var oldhund = new Date(oldYear)

console.log("Curent Year: " + checkTime + " 100 Year back, it was " + oldhund)



//Question (22)

var oneYr = new Date();
var oldyear = oneYr.setYear(oneYr.getFullYear() - 100);
var oldhund = new Date(oldyear)

console.log("Curent Year: " + oneYr + " 100 Year back, it was " + oldhund)



// Question (23)

var currentYear = new Date()
var getUserdate = prompt("MM/d/yy")
var userDate = new Date(getUserdate)
var diff = currentYear - userDate
var age = diff / (24 * 60 * 60 * 1000 * 365)
var bdYear = currentYear.getFullYear() - age

console.log("Your birthday year: " + bdYear)
console.log("Your age is: " + age)



// Question (24)

// (a)

var name = prompt();


// (b)

var date = new Date()
var month = date.getMonth()


// (c)

var unit = prompt()


// (d)

var chargeUnit = prompt()


// (e)

var netAmount = unit * chargeUnit


// (f)

var dueDateCharge = 500


// (g)

var grossAmount = netAmount + dueDateCharge

console.log("Customer Name " + name)
console.log("Month " + month)
console.log("Number of Units: " + unit)
console.log("Charges per init: " + chargeUnit)
console.log("Net Amount Payable(eithin Due Date): " + netAmount)
console.log("Late payment surcharge: " + dueDateCharge)
console.log("Gross Amount payable(after Due Date): " + grossAmount)




