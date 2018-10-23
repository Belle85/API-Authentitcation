const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/APIAuthentication', { useNewUrlParser: true });

const app = express();

//Middlewares
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Routes
app.use("/users", require("./routes/users"));

//App listening
const PORT = process.env.PORT ||3001;
app.listen(PORT);
console.log("My app is listening on " + PORT);