let http = require("http");
let PORT_NO = 3000;
http.createServer(function(request,response) {
    console.log(`Request arrives`);
    response.write(`This is our second App`);
    response.end();
}).listen(PORT_NO, function(){
    console.log(`server is running in ${PORT_NO}`)
});