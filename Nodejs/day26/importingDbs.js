
let express = require("express");
let cors = require("cors");
let mongoClient = require("mongodb").MongoClient;
let parser = require("body-parser");
const { request } = require("express");
const { response } = require("express");

//refrencing top level express function
let app = express();
//database url
let dbURL = "mongodb://localhost:27017";
//express server port
let PORT = 3000;

//stsrt the express server
app.listen(PORT, () => console.log(`Server is running in the ${PORT}`));

//middle ware to parse request and enable cors
app.use(parser.json());
app.use(cors());
//on GET: /users yu must able to returns all the user object
app.get("/user",(request,response) => {
   mongoClient.connect(dbURL, {useNewUrlParser:true}, (error,client) => {
       if (error)
       throw error;
       let db =client.db("mydb");
       let cursor = db.collection("user").find();
       let user = [];
       //cursor.forEach(callback1,callback2)
       cursor.forEach((doc, err) => {
           if(err)
           throw err;
           user.push(doc);
       }, () => {
           response.json(user);
           client.close;
       });
   });

});