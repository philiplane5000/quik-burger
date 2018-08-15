const express = require("express");
const bodyParser = require("body-parser");
const router = require("./controllers/burgersController");
const exphbs  = require('express-handlebars');
const app = express();

let PORT = process.env.PORT || 8080;


//SERVING STATIC CONTENT FROM "PUBLIC" DIRECTORY
app.use(express.static("public"));

//PARSE APPLICATION/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
//PARSE APPLICATION/json
app.use(bodyParser.json());

let hbs = exphbs.create({ defaultLayout: "main" });
 
// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

let routes = require("./controllers/burgersController.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
})


