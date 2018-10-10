const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

const id = "5bbdc1d7a4100b134819ebce";

if (!ObjectID.isValid(id)) {
    console.log("ID not valid");
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log("Todos", todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log("Todo", todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log("ID not found");
//     }
//     console.log("Todo by ID", todo);
// }).catch((err) => {
//     console.log(err);
// });

const userID = "5bbcd1613ec3272f00ea5496";

if (!ObjectID.isValid(userID)) {
    console.log("ID not valid");
}

User.findById(userID).then((user) => {
    if (!user) {
        return console.log("ID not found");
    }
    console.log(JSON.stringify(user, undefined, 4));
}).catch((err) => {
    console.log(err);
});

