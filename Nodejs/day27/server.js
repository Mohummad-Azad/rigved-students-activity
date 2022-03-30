
let express = require("express");
let app = express();

//pass the express to the server of http to connect wxpress with http
let http = require("http").Server(app);
//load socket.io module and connect http module
let socketio = require("socket.io");
let io = socketio(http);

//load the index.html file when u send request from browser
app.get("/", (request,response) => {
    //_dirname is the js property to find the current directory
    response.sendFile(_dirname+'/index.html'); 
});

//establish conncetion between client & server
io.on('connection', (socket) => {
    socket.on("msg", (data) => {
        console.log(`Client sent ${data}`)
    });
    //server sends some data to the connected client
    socket.emit('obj', 'hello I am server');
});
//start the http srver so that client can access the http server
http.listen(3000, () => console.log('server is running in 3000'))