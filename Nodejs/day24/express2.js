const { response } = require('express');
let express = require('express');
const { request } = require('http');
let app =express();
let fs = require("fs");
const { parse } = require('path');

let PORT_NO = 3001 ; 
app.listen(3001, () => console.log(`Server is running in ${PORT_NO}`));
app.get ('/', (request,response) => {
    response.send('Hello Wporld!');
});

app.get('/employee', (request,response) => {
    let emp = {id : 100, name : "Azadsarkar", salary : 2000};
    response.json(emp);//coverts js object to json and return thet as a response
});

app.get('/employees',(request,response) => {
    let empArray = [
        {id : 10, name : "Sameer", salary : 25000},
        {id : 20, name : "Aameer", salary : 35000},
        {id : 30, name : "Karan", salary : 47000},
        {id : 40, name : "Ashok", salary : 65000},
        {id : 50, name : "Rahul", salary : 55000}
    ];
    response.json(empArray);
});

app.get('/fs',(request,response) => {
    let data =fs.readFileSync('express1.json');
    let dataString = data.toString();
    let jsObj = JSON.parse(dataString);
    response.json(jsObj);
})

