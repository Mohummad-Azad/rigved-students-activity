let http =require("http");
let url = require("url");

let PORT_NO = 3000 ;

http
.createServer((request, response) => {
    let urlString = request.url;
    if(urlString != '/favicon.ico') {
        //extract the query parameter &convert into js object

        let urlObject = url.parse(urlString, true);
        let user = urlObject.query;
        console.log(user);
        console.log(JSON.stringify(user));


        response.writeHead(200, {'content-type': 'text/html'});
        response.write(`<h2>Hello ${user.name}, your age is ${user.age}, your salary is ${user.salary}</h2>`)
    }
    response.end();
})
.listen(PORT_NO, () => console.log(`Server running at ${PORT_NO}`));