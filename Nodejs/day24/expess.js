
let express = require("express");
const { request } = require("http");
let app = express();//refers to top level function which provides get,post,putand delete ,listen
let PORT_NO = 3001;

app .listen(PORT_NO, () => {console.log(`Express module is running at ${PORT_NO}`)});

//create webservices by configuring URL and using http methods
app.get('/',(request,response) => {
    response.send('Requesting get'); //return txt to the the consumer

})

app.post('/',(request,response) => {
    response.send('Requsting post');//return text data
})

app.put('/', (request,response) => {
    response.send('Requesting put');
})

app.delete('/', (request,response) => {
    response.send('Requesting delete');
})