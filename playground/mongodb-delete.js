const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    const db = client.db("TodoApp");
    
    // delete many
    // db.collection("Todos").deleteMany({text: "Have dinner"}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection("Todos").deleteOne({text: "Have dinner"}).then((result) => {
        // console.log(result);
    // });

    //findOneAndDelete
    // db.collection("Todos").findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // db.collection("Users").deleteMany({name: "Ahmed"}).then((result) => {
    //     console.log(result);
    // });

    db.collection("Users").findOneAndDelete({_id: new ObjectID("5bbb67bd1e42c5187803547b")}).then((result) => {
        console.log(JSON.stringify(result, undefined, 4));
    });

    // client.close();
});