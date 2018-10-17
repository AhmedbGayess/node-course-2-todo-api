const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOLAB_URI, {useCreateIndex: true});

module.exports = { mongoose };
