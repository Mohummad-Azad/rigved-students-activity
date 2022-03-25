let fs = require("fs");
let express = require('express');
let app =express();
let PORT_NO = 3001 ; 
app.listen(3001, () => console.log(`Server is running in ${PORT_NO}`));

app.get('/fs',(request,response) => {
    let data =fs.readFileSync('express.json');
    let dataString = data.toString();
    let jsObj = JSON.parse(dataString);
    response.json(jsObj);
})