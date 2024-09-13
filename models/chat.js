const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({
    title : {
        type: String,
        required: true,
        index: true,
        lowercase: true,
        match: /^[0-9a-z]+(?:-[0-9a-z]+)*$/
    },
    userIDArray : {
        type: [mongoose.Types.ObjectId],
        required: true,
        alias: "users"
    },
    messageArray : {
        type: [mongoose.Types.ObjectId],
        required: true,
        alias: "messages"
    }
})

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;