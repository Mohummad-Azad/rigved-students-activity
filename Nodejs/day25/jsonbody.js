let express = require("express");
let app = express();
let parser = require("body-parser");
let PORT =3000;

app.listen(PORT, () => console.log(`Server running at ${PORT}`));

app.use(parser.json());

app.post('/user', (req, res) => {
    //extrat the body from the request body using request.body
    let content = req.body;  //{name: value , age:value}
    console.log(content);
    res.send(`Hello, ${content.name}, your age is : ${content.age}`);
});

app.post('/user/:id', (req, res) => {
    //extract the json from request body using request.bnody
    let content =req.body;
    let id = req.params.id;
    console.log(id, content);
    let user = {userId: id, username: content.name, age: content.age};
    res.json(user);
});
