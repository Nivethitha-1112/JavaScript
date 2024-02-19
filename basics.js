//declaring variables
var price = 100000
var product = "Iphone15"
var tax = 20000
console.log(product)
var total = price + tax
console.log(total)

//kashmir apple
var fruit = "Apple"
console.log(fruit)

//increment operators (post)
var a = 10
var b = a++
console.log(b)

//increment operators (pre)
var a = 10
var b = ++a
console.log(b)

//decrement operators (post)
var a = 20
var b = a--
console.log(b)

//decrement operators (pre)
var a = 20
var b = --a
console.log(b)

//Functions
function iphone()
{
 console.log ("This is my Iphone")
}
iphone()

//Functions Exercise
var a = 30
var b = 10
 
function add()
{
    console.log(a+b)
}

add()

//function parameters
function area(l,b)
{
    console.log("Area is:"+l*b)
}

area(10,20)

//function return keyword
function add(a,b)
{
    return (a+b)
}
var a = 10
var b = 20
var total = add(10,20)
console.log(total)

//if else exercise
 var rain = true 
 if(true){
    console.log("take an umberalla")
 }
 else{
    console.log("enjoy the rain")
 }

 //logical operators
 console.log (false && true && true)
 console.log (true || false || false)
 console.log (!false)

 //logical operators exercise

 var color = "green"
 if (color == "red")
 {
    console.log("Stop")
 }
 if (color == "yellow")
 {
    console.log("Get Ready")
 }
 if (color == "green")
 {
    console.log("Go")
 }