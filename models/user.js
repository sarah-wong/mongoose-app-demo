const mongoose = require("mongoose");
const validator = require("email-validator");

const userSchema = new mongoose.Schema({
    email : {
        type: String,
        unique: true,
        validate: validator.validate
    },
    username : {
        type: String, 
        index: true,
        unique: true,
        required: true,
        minLength: 3,
        maxLength: 32
    },
    password : {
        type: String,
        require: true,
        minLength: 8,
        match : /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^0-9A-Za-z]).*$/
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User;