let express = require("express");
let cors = require("cors");
let mongoClient = require("mongodb").MongoClient;
let parser = require("body-parser");
let app = express();
let dbURL = "mongodb://localhost:27017";
let PORT = 3000;

app.listen(PORT, () => console.log(`Server is running in the ${PORT}`));

//middle ware to parse request and enable cors
app.use(parser.json());
app.use(cors());

app.post("/user",(request,response) => {
    let userDocument = request.body;
    mongoClient.connect(dbURL, {useNewUrlParser:true}, (error,client) => {
        if (error)
        throw error;
        let db =client.db("mydb");
        
        db.collection("user").insertOne(userDocument, (err, res) => {
            if(err) {
                response.status(409).json({"message":`ISer with an id ${userDocument._id} exists`})
            }

            response.status(201).json(res);
            client.close();
        });
    });
 
 });