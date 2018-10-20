const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create a schema
const userSchema = new Schema({
    email: string,
    password: string,   
});

//Create a model
const User = mongoose.model("user", userSchema);


//Export the model
module.exports = User;
