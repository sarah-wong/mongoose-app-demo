const mongoose = require("mongoose");
const User = require("./user")

const messageSchema = mongoose.Schema({
    userID : {
        type: mongoose.Types.ObjectId,
        required: true
    },
    timestamp : {
        type: Date,
        index: true,
        required: true,
    },
    content : {
        type : String,
        required: true
    }

})

const Message = mongoose.Model("Message", messageSchema);

module.exports = Message;