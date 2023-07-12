const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes");
const app = express();
const URI = 'mongodb+srv://akashkundu:gaganakash@cluster0.2yu7ak6.mongodb.net/?retryWrites=true&w=majority';

var colors = require('colors');

colors.setTheme({
    success: 'green',
    warn: 'yellow',
    error: 'red'
});

app.use(express.json());

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "[LOG] Connection Error: ".error));
db.once("open", function () {
    console.log("[LOG] Connected Successfully!".success);
});

app.use(Router);

app.listen(3000, () => {
    console.log("[LOG] SERVER IS RUNNING AT PORT 3000".success);
});

