//Question (01)

function mul(a, b) {
    console.log(a * b)
}
mul(2, 5)


//Question (02)

function date() {
    console.log(new Date())
}
date()


//Question (03)

function fullName(firstName, lastName) {
    console.log("Hello !" + firstName + " " + lastName)
}
fullName("Syed", "Amjad")


//Question (04)

function sum(a, b) {
    console.log(a + b)
}
sum(2, 6)


//Question (05)

function calculate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2
        case "-":
            return num1 - num2
        case "*":
            return num1 * num2
        case "/":
            return num1 / num2
    }
}


//Question (06)

function square(num) {
    return num * num
}


//Question (07)

function factorial(num) {
    if (num == 0)
        return 1;
    else {
        return (num * factorial(num - 1));
    }
}
factorial(5)


//Question (08)

function counting() {
    var start = +prompt("Enter counting start number")
    var end = +prompt("Enter counting end number")
    for (var i = start; i <= end; i++) {
        console.log(i)
    }
}


//Question (09)

function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(num) {
        return num * num
    }
    var hypotenuse = calculateSquare(base) + calculateSquare(perpendicular)
    return calculateSquare(hypotenuse)
}


//Question (10)

function argumentLength() {
    return arguments.length
}


//Question (11)

function largestNumber() {
    var maxValue = 0
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] > maxValue) {
            maxValue = arguments[i]
        }
    }
    console.log(maxValue)
}
largestNumber(4, 40, 10)


//Question (12)

function areaRectangle(width, height) {
    return width * height
}
areaRectangle(4, 5)


//Question (13)

var arr = [6, 3, 5, 4]

function sortArray(array) {
    return array.sort()
}
sortArray(arr)


//Question (14)

var arrayValue = [2, 6, 9, 10, 3]

function arraySum() {
    var sum = 0
    for (var i = 0; i < arrayValue.length; i++) {
        sum += arrayValue[i]
    }
    console.log(sum)
}


//Question (15)

var param = function inner() {
    return typeof inner;
}
alert(param()); //Type of Function is FUNCTION


//Question (16)

function power(value, power) {
    var mul = 1
    for (var i = 1; i <= power; i++) {
        mul *= value
    }
    console.log(mul)
}


//Question (17)

function rollDice() {
    var dice = Math.floor(Math.random() * 6) + 1
    return dice
}
rollDice()


//Question (18)

function reversedNum(num) {
    return (
        parseFloat(
            num
            .toString()
            .split('')
            .reverse()
            .join('')
        )
    )
}


//Question (19)

function isPalindrome(text) {
    var reverseText = text.split('').reverse().join('')

    if (reverseText === text) {
        alert(text + " is palindrome")
    } else {
        alert(text + " is not palindrome")
    }
}


//Question (20)

var line = "the quick brown fox jumps over the lazy dog"

function upperCase(string) {
    string = string.split(" ")
    var array = []
    for (var i = 0; i < string.length; i++) {
        array.push(string[i].charAt(0).toUpperCase() + string[i].slice(1))
    }
    return array.join(" ")
}
console.log("Line was: " + line)
console.log("After running function: " + upperCase(line))


//Question (21)

function find_longest_word(str) {
    var array1 = str.match(/\w[a-z]{0,}/gi);
    var result = array1[0];

    for (var x = 1; x < array1.length; x++) {
        if (result.length < array1[x].length) {
            result = array1[x];
        }
    }
    return result;
}
console.log(find_longest_word('Web Development Tutorial'));


//Question (22)

function vowel_count(str1) {
    var vowel_list = 'aeiouAEIOU';
    var vcount = 0;

    for (var x = 0; x < str1.length; x++) {
        if (vowel_list.indexOf(str1[x]) !== -1) {
            vcount += 1;
        }

    }
    return vcount;
}
console.log(vowel_count("The quick brown fox"));


//Question (23)

function type(value) {
    return typeof (value)
}


//Question (24)

function unique_char(str1) {
    var str = str1;
    var uniql = "";
    for (var i = 0; i < str.length; i++) {

        if (uniql.indexOf(str.charAt(i)) == -1) {
            uniql += str[i];

        }
    }
    return uniql;
}
console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"));


//Question (25)

function Char_Counts(str1) {
    var uchars = {};
    str1.replace(/\S/g, function (l) {
        uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);
    });
    return uchars;
}
console.log(Char_Counts("The quick brown fox jumps over the lazy dog"));


//Question (26)

function calculateAge(currYear, birthYear) {
    console.log("Current Year: " + currYear)
    console.log("Birth Year: " + birthYear)
    console.log("You are either " + (currYear - birthYear) + " or " + ((currYear - birthYear) - 1) + " Years Old")

}


//Question (27)

var maxAge = 100;
var calculateSupply = function (age, amountPerDay) {

    timeLeft = maxAge - age;
    amountPerDay = Math.round(amountPerDay); //converts floating point values to a round number
    amountConsumed = timeLeft * amountPerDay;
    var message = "You will need " + amountConsumed + " to last you until the ripe old age of " + maxAge;
    console.log(message);
}
calculateSupply(34, 7.8);


//Question (28)

function circum(radius) {
    var circle = 2 * Math.PI * radius;
    alert("The circumference is " + Math.floor(circle))
}
circum(3)

function area(radius) {
    var circle = Math.PI * (radius * radius)
    alert("The area is: " + Math.floor(circle))
}
area(3)


//Question (29)

function cToF(celsius) {
    var cTemp = celsius;
    var cToFahr = cTemp * 9 / 5 + 32;
    var message = cTemp + '\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}
function fToC(fahrenheit) {
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5 / 9;
    var message = fTemp + '\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
}

cToF(60);
fToC(45);

