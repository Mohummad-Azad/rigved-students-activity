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

app.put("/user/:id/:name",(request,response) => {
    let id = parseInt(request.params.id);
    let nameNew = request.params.name;
    mongoClient.connect(dbURL, {useNewUrlParser:true}, (error, client) => {
        if(error)
        throw error;

        let db =client.db("mydb");
        db.collection("user").updateOne({_id:id}, {$set:{name: nameNew}})
        .then((doc) => {
           
            response.json(doc);
            client.close();
        });
    });
});