require("dotenv").config();
const express = require("express");
const app = express();
const connectToDB = require("./config/connectToDB");
const userRouter = require("./routes/userRoutes");

const PORT = process.env.PORT || 443;

// SETUP
app.use(express.json());
connectToDB();

// ROUTES
app.get("/", (req, res)=>{
    res.send("Hello World!");
})
app.use('/user', userRouter)

// LISTEN

app.listen(PORT, ()=>{
    console.log(`Server is running on Port: ${PORT}`);
})