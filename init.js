const mongoose = require('mongoose');

const Chat = require("./models/chat.js");


main()
    .then (() => {
    console.log('connection successful');
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


let allChats = [
    {
    from: "neha",
    to: "shardha",
    msg: "send me your photos",
    created_at: new Date()
},
{
    from: "aman",
    to: "shardha",
    msg: "love you too",
    created_at: new Date()
},
{
    from: "neha",
    to: "aman",
    msg: "send me your cv",
    created_at: new Date()
},
{
    from: "Aman",
    to: "shardha",
    msg: "send me your photos",
    created_at: new Date()
},
{
    from: "neha",
    to: "shardha",
    msg: "send me your photos",
    created_at: new Date()
},
{
    from: "ankii",
    to: "shardha",
    msg: "love you 365",
    created_at: new Date()
},
];


Chat.insertMany(allChats);
