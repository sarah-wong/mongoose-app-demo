require("dotenv").config();
const express = require("express");
const app = express();
const connectToDB = require("./config/connectToDB");

const PORT = process.env.PORT || 3000;

// SETUP
app.use(express.json());
connectToDB();

// ROUTES
app.get("/", (req, res)=>{
    res.send("Hello World!");
})

// LISTEN
app.listen(PORT, ()=>{
    console.log(`Server is running on Port: ${PORT}`);
})