const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

//Middlewares


//Routes

//App listening
const PORT = process.env.PORT ||3000;
app.listen(PORT);
console.log("My app is listening.");