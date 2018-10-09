const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    const db = client.db("TodoApp");

    // db.collection("Todos").findOneAndUpdate({
    //     _id: new ObjectID("5bbcb812209a702867cff6c4")
    // }, {
    //         $set: {
    //             completed: true
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).then((result) => {
    //         console.log(result);
    //     });

    db.collection("Users").findOneAndUpdate({
        _id: new ObjectID("5bba3a068d01f7156c5becc4")
    }, {
        $set: {
            name: "Ahmed"
        }, 
        $inc: {
            age: 2
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 4));
    });

    client.close();
});