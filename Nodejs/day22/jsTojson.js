const { fstat } = require("fs");

let employee = {id:2, name:"Azad", salary:26666};
//js object to json
let jsonString = JSON.stringify(employee);

console.log(employee);
console.log(jsonString);

fs.writefilesync('employee.json',jsonString);
console.log('done...');