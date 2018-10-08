const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    const db = client.db("TodoApp");

    // db.collection("Todo").find({
    //     _id: new ObjectID("5bbb6ab3209a702867cff39c")
    // }).toArray().then((docs) => {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 4));
    // }, (err) => {
    //     console.log("Unable to fetch todos", err);
    // });

    // db.collection("Todo").find().count().then((count) => {
    //     console.log("Todos");
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log("Unable to fetch todos", err);
    // });

    db.collection("Users").find({
        name: "Ahmed"
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 4));
    }, (err) => {
        console.log("Unable to fetch users", err);
    })

    client.close();
});