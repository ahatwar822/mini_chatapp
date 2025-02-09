const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("views engine", "ejs");


main()
    .then (() => {
    console.log('connection successful');
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}



app.get("/", (req, res) => {
    res.send('root is working');
});


app.listen(3000, () => {
    console.log ('server is listening on port 3000');
})