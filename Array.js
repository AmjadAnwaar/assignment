// Question (01)
var student_name = []
student_name.push("Amjad", "Owais", "Kashif", "Ali", "Shahbaz", "husain", "shadab")




//Question (02)
var student_name = []
student_name.push("Owais", "Amjad", "Kashif", "Ali", "Shahbaz", "husain", "shadab")




//Question (03)
var srting = ["Karachi", "Islamabad"]




//Question (04)
var num = [1, 2]




//Question (05)
var boolean = [true, false]




//Question (06)
var mixed = [true, false, 3, 4, "Quetta", "Pishawar"]




//  Question (07)
var network = ["Zong", "Waird", "Jazz", "Ufone", "Telenor"]




// Question (08)
var quali = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phil.', 'PhD']
console.log(quali)




//Question (09)
var movie = []
movie.push("Avengers Endgame", "Dabang 3", "Baghi 3")
movie.length




//Question (10)
var cars = []
cars.push("Swift", "Mehran", "Mera", "Civic", "Corolla", "ALto", "Cultus")


    // (a)
console.log(cars)


    // (b)
cars[0]


    // (c) *Find of last array*
cars.lenght - 1


    // (d)
cars[car.length - 1]




// Question (11)
var student_name = ["Owais", "Amjad", "kashif"]
var student_score = [320, 230, 480]


console.log("Score OF " + student_name[0] + " is " + student_score[0] + " . Percentage " + student_score[0] / 500 * 100 + " % ")
console.log("Score OF " + student_name[1] + " is " + student_score[3] + " . Percentage " + student_score[1] / 500 * 100 + " % ")
console.log("Score OF " + student_name[2] + " is " + student_score[2] + " . Percentage " + student_score[2] / 500 * 100 + " % ")




//Question (12)
var colors = ["Red", "White", "blue", "grey"]
console.log(colors)


    // (a)
var add_Color_start = prompt("what color he/she wants to add to the beginning")
colors.unshift(add_Color_start)


    // (b)
var add_Color_End = prompt("what color he/she wants to add to the End")
colors.push(add_Color_End)


    // (c)
colors.push("Pink", "Black")
console.log(colors)


    // (d)
colors.shift()


    // (e)
colors.pop()


    // (f)
var del_Color_start = prompt("what color he/she wants to delete to the beginning")
colors.shift(del_Color_start)


    // (g)
var del_Color_End = prompt("what color he/she wants to delete to the End")
colors.pop(del_Color_End)



/*========================================================================================

**Some Important**
1) Array Name.sort()                    ***** ----Ascending  order sorting---- *****
2) Array Name.sort().reverse()            ***** ----Descending order sorting---- *****
3) Array Name.join(" ")                 ***** ----Convert  Array to String---- *****
4) Variable Name.splice(" ")            ***** ----Convert  String to Array---- *****

==========================================================================================*/


// QUestion (13)
var scr = [320, 220, 105, 480, 310]
scr.sort()




// Question (14)
var scr = ["Mango", "Pineapple", "Apple", "banana", "Orange"]
scr.sort()




// Question (15)
var cityName = ["Karachi", "Lahore", "Islamabad", "Quetta", "peshawar"]
var new_1 = cityName.slice(1, 3)




// Question (16)
var arr = ['This', 'is', 'my', 'cat']
arr.join(" ")




// Question (17)
var fifo = []
fifo.push("Keyboard")
fifo.push("Mouse")
fifo.push("Joystick")
fifo.push("C.P.U")
fifo.push("Speaker")




// Question (18)
var fifo_end = []
fifo_end.unshift("Keyboard")
fifo_end.unshift("Mouse")
fifo_end.unshift("Joystick")
fifo_end.unshift("C.P.U")
fifo_end.unshift("Speaker")