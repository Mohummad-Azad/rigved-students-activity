let express = require('express');
let app =express();
let PORT_NO = 3001 ; 
app.listen(3001, () => console.log(`Server is running in ${PORT_NO}`));

app.post('/user', (request,response) => {
    let user = [{userId: 100, name : "Azadsarkar", age : 20},
    {userId: 200, name : "karan", age :30},
    {userId: 300, name : "Alex", age : 40},
    {userId: 400, name : "Xandar", age : 50}
    ];
    response.json(user);
});

app.post('/user', (request,response) => {
    console.log(`ID = ${userId}, Name = ${name} , Age = ${age}`);
});