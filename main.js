
// OutPut
//1- alert("Abdulrahman Alaaa");

//2- document.write(3 * 10);

//3- console.log("Elekenany");

//4- document.getElementById("alaa").innerHTML = "I amAbdulrahman ALaa Full stack deve";


// varaible

//1- var ------ 2-const ---- 3-let 


// var firstNameLastNumAge = "Abdulrahman";

// var myAge = 25;

// console.log(FirstName);


// Datatype 

// String 
// number
// boolean
// array
// object
// undefeind
// null  

// var x = 10; // number 

// var Name = "Alaa"; // String

// var nameeee = true; // boolean

// var Products = ["Product1", "Product2", "Product3"]; // index

// console.log(Products[3]);

// object
// var Productsss = {
//     property : "value",
//     property1 : "value1",
// }

// var Productsss = {
//     Type: "shirt",
//     Color: "red",
//     Size: "M"
// }

// console.log(Productsss.Color); // dot notain

// document.write();

// document.getElementById("alaa").innerHTML = "My Type Is: " + Productsss.Type;

// var x = null; 

// console.log(x);


// =   ==  === 

// var x = null;

// console.log(typeof x);


// operators
// + - / *

// var x  = 100;

// var y = 200;

// var z = x + y;
// var z = x - y;
// var z = x / y;
// var z = x * y;

// console.log(z); // 300
// console.log(z); // -100
// console.log(z); // 2
// console.log(z); // 2000


// Increment ++
// Decrement --

// console.log(2++);
// console.log(2--);


// = 

// == 

// != 

// ===
// type value 

// !== 

// not type not value 

// 0 >= 0

// 10 >= 100

// &&  and 

// || or 


// date 

// 1 jan 1970

// var date = new Date();

// console.log(date.getTime());
// // getFullYear 1930

// // getMonth 0 - 11

// // getDate  1 - 31

// // getDay 0 - 6 

// // getHours 0 - 23 

// // getMinutes 0 - 59 

// // getSeconds 0 - 59

// // getMilliseconds 0 - 999

// // getTime 1 jan 1970 





// Function Display 
function myFunc() {
    var x = document.getElementById("div1");

    if(x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}



var x = 10;

if(x == 20) {
    console.log("hello 10"); 
} else {
    console.log("hello xxxx"); 

}


// Function Open Nav 
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(158, 158, 158, 0.363)";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
    document.body.style.backgroundColor = "white";
}


// Function DarkMode
function DarkMode() {
    document.body.classList.toggle("dark23");
}