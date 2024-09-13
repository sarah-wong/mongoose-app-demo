const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
    userID : {
        type: Number,
        required: true
    },
    timestamp : {
        type: Date,
        index: true,
        required: true,
        alias: "time"
    },
    latestEdit : {
        type: Date,
        required: false,
        alias: "edit"
    },
    content : {
        type : String,
        required: true
    }

})

const Message = mongoose.Model("Message", messageSchema);

module.exports = Message;