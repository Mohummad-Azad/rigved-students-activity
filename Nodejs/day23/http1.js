let http = require("http");
let PORT_NO = 3000;
http.createServer(callback1).listen(PORT_NO, callback2);


//this is executed by passing to the createServer , when the request arrive

function callback1(request,response) {
    console.log('callback1 is executed, request arrives');
    response.write('welcome to our first web app');
    response.end();
}

//this is executed when the server occupies the port 
function callback2() {
    console.log(`callback2 is executed , server started at ${PORT_NO}`);
}