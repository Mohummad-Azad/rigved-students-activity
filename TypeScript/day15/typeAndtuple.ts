
let name : string = "Azad Sarkar";
let age : number = 25;
let isEmployed : boolean = true ;
let contacts : any = {phone :99999 , Email : "azadsarkar87@gmail.com"} ;

document.write(` <p>Username : ${name} , Age : ${age} , IsEmployed : ${isEmployed}, </p>`);
document.write(`<p>Phone : ${contacts.phone}, Email : ${contacts.Email} </p>`);



//tuple for fixed values
let x :[string ,number, string];
x = ["Hello",50,"World"];//tuple for fixed values

//array
let y : number[];
y = [20, 30, 40, 50];
document.write(`<p> x = ${x}, </p>`);
document.write(`<p> x = ${y} </p>`);