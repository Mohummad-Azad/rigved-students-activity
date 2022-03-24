let fs = require("fs");
let read = require("readline-sync");

//let there is already an array file
let data =fs.readFileSync('employee.json');
let dataString = data.toString();
let jsArray = undefined ;

if (dataString.length<1 || dataString == "") {
    jsArray = [];  //creating js array
}
else
{
    jsArray = JSON.parse(dataString); //json to js convertion
}

let n = read.question('Enter Your Name: ');
let a = read.question('Enter Your Age: ');
let emp = {name: n, age: a};

jsArray.push(emp);
let jsonArray = JSON.stringify(jsArray);//js to json

fs.writeFileSync("employee.json", jsonArray);