let fs = require("fs");
let data = fs.readFileSync('user.txt');
let userinfo = data.toString();
let useritem = userinfo.split(";");

let [name, age, gender] = useritem;
console.log(`Name= ${name}, Age= ${age}, Gender = ${gender}`);