const express = require("express");
const path = require("path");
const app = express();
const port = 3030;

const publicPath = path.resolve(__dirname, "./public");
app.get(express.static(publicPath));

app.listen(port, ()=> console.log("Server running in port " + port));