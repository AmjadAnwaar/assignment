
//Q1
var student = {
    name: "Syed Amjad Ali"
}

//Q2
var student = {
    name: "Syed Amjad Ali",
    age: 21,
    id: 2214
}
alert("Name is " + student.name + " Age is " + student.age + " holding id " + student.id)

//Q3
var studentBio = {
    firstName: prompt("Enter your first name"),
    lastName: prompt("Enter your last name"),
    age: prompt("Enter your age"),
    id: prompt("Enter your id"),
    contact: prompt("Enter your contact"),
    address: prompt("Enter your address"),
}

console.log(studentBio)

//Q4

var studentResult = {
    name: prompt("Enter your name"),
    id: prompt("Enter your first name"),
    html: +prompt("Enter your first name"),
    css: +prompt("Enter your first name"),
    javascript: +prompt("Enter your first name"),
    bootstrap: +prompt("Enter your first name"),
    Total_Marks: studentResult.html + studentResult.css + studentResult.js + studentResult.bootstrap
}

//Q5
var student = {
    name: prompt("Enter Name"),
    age: +prompt("Enter your age")
}
if(student.age > 20){
    alert(student.name + " is not eligible for Module A")
}else{
    alert(student.name + " is eligible for Module A")
}

//Q6
var studentOne = {
    studentName: "Zia Khan",
    studentId: "BB-4446",
    marksHTML: 80,
    marksCSS: 90,
    marksJavascript: 90,
    marksBootstrap: 70,
    marksTotal: 400
}
var studentTwo = {
    studentName: "Rehan Uddin",
    studentId: "BB-4448",
    marksHTML: 70,
    marksCSS: 85,
    marksJavascript: 80,
    marksBootstrap: 92,
    marksTotal: 400
}

studentOne.percentage = (studentOne.marksHTML + studentOne.marksCSS + studentOne.marksJavascript + studentOne.marksBootstrap) * 100 / studentOne.marksTotal
studentTwo.percentage = (studentTwo.marksHTML + studentTwo.marksCSS + studentTwo.marksJavascript + studentTwo.marksBootstrap) * 100 / studentTwo.marksTotal

console.log(studentOne.studentName + " secured " + studentOne.percentage + "%")
console.log(studentTwo.studentName + " secured " + studentTwo.percentage + "%")

if (studentOne.percentage > studentTwo.percentage) {
    console.log("Congratulations: Mr. " + studentOne.studentName + " you got Scholarship")
} else {
    console.log("Congratulations: Mr. " + studentTwo.studentName + " you got Scholarship")
}

//Q7
var studentInfo = {
    name: prompt("Enter your name"),
    age: prompt("Enter your age"),
    addrress: prompt("Enter your address")
}
alert("Cinfirmation: Your name is " + studentInfo.name + ", You are " + studentInfo.age + " years old, Your address is " + studentInfo.addrress)

//Q8

var studentMarksheet = {
    name: prompt("Enter your name"),
    id: prompt("Enter your Id"),
    html: +prompt("Enter your HTML marks"),
    css: +prompt("Enter your CSS marks"),
    javascript: +prompt("Enter your JavaScript marks"),
    bootstrap: +prompt("Enter your BootStrap marks"),
    total: +prompt("Enter your total marks")
}
studentMarksheet.percentage = (studentMarksheet.html + studentMarksheet.css + studentMarksheet.javascript + studentMarksheet.bootstrap) * 100 / studentMarksheet.total

console.log("Helo! Mr/Ms. " + studentMarksheet.name + " having ID#. " + studentMarksheet.id)
console.log("Your Marks in HTML: " + studentMarksheet.html)
console.log("Your Marks in CSS: " + studentMarksheet.css)
console.log("Your Marks in JavaScript: " + studentMarksheet.javascript)
console.log("Your Marks in BootStrap: " + studentMarksheet.bootstrap)
console.log("Your obtained " + studentMarksheet.percentage + "%")

//Q9
var arr = [
    { name: 'Asher', age: 22 },
    { name: 'Zubair', age: 20 },
    { name: 'Kashif', age: 23 },
    { name: 'Wasif', age: 17 },
    { name: 'Hanzala', age: 28 }
]

//Q9(i)
arr[3] = { name: "Siddique", age: 23 }

//Q9(ii)
arr.push({name: "Umair", age: 23})

//Q9(iii)
arr.shift()

//Q9(iv)
for(var  i = 0; i < arr.length; i++){
    arr[i].createdAt = new Date()
}

//Q10
var arr = [
    { name: 'Asher', age: 22 },
    { name: 'Wasif', age: 20 },
    { name: 'Kashif', age: 23 },
    { name: 'Zubair', age: 17 },
    { name: 'Hanzala', age: 28 }
]

var sortArr = []
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].name.length; j++) {
        if (arr[i].age >= 18 && arr[i].age <= 28 && arr[i].name[j] === "f") {
            sortArr.push(arr[i].name)
        }
    }
}
var string = sortArr.toString()
console.log(string)

//Q11
var students = [
    {
        _id: 'std1',
        name: 'Bill Gates',
        age: 30
    },
    {
        _id: 'std2',
        name: 'Steve Jobs',
        age: 30
    },
    {
        _id: 'std3',
        name: 'Suzanne Collins',
        age: 30
    }];

var courses = [
    {
        name: 'Maths',
        std_id: ['std3', 'std1']
    },
    {
        name: 'Computer Science',
        std_id: ['std3', 'std2']
    },
    {
        name: 'Commerce',
        std_id: ['std1']
    },
]

var studentInfo = []
for (var i = 0; i < students.length; i++) {
    for (var j = 0; j < courses.length; j++) {
        for (var k = 0; k < courses[j].std_id.length; k++) {
            if (courses[j].std_id[k] === students[i]._id) {
                studentInfo.push(students[i].name + " " + students[i].age + " " + courses[j].name)
            }
        }
    }
}
