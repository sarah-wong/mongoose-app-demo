const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({
    title : {
        type: String,
        required: true,
        index: true,
        lowercase: true,
        match: /^[0-9a-z]+(?:-[0-9a-z]+)*$/
    },
    userIDList : {
        type: [Number],
        required: true,
        alias: "users"
    },
    messages : {
        type: []
    }
})