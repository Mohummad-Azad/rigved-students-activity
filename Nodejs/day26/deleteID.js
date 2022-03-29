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

app.delete("/user/:id",(request,response) => {
    let id = parseInt(request.params.id);

    mongoClient.connect(dbURL, {useNewUrlParser:true}, (error, client) => {
        if(error)
        throw error;

        let db =client.db("mydb");
        db.collection("user").deleteOne({_id:id})
        .then((doc) => {
            if (doc != null) {
                response.json(doc);
            }else {
                response.status(404).json({"message":`Sorrry ${id} dosen't exist`})
            }
            client.close();
        });
    });
});