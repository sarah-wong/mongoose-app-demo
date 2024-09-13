require("dotenv").config();
const mongoose = require("mongoose");
const DB_URI = process.env.DB_URI || "";

async function connectToDB(){
    const conn = await mongoose.connect(DB_URI);
    if(conn){
        console.log("Connected to DB");
    }
}

module.exports = connectToDB
