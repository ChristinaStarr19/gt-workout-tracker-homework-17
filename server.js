const express = require("express");
const mongoose = require("mongoose");
const app = express();

// const Resistance = require("./models/resistanceModel");


const PORT = process.env.PORT || 8080;

//Middleware for post bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true ,useUnifiedTopology: true });

const connection = mongoose.connection;

connection.on("connected", () => {
    console.log("Mongoose successfully connected.")
})

connection.on("err", (err) => {
    console.log("Mongoose connections error: ", err);
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}!`);
});