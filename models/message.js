const mongoose = require("mongoose");
const User = require("./user")

async function validateUserID(id){
    const user = await User.findById(id);
    return user?true:false;
}

const messageSchema = mongoose.Schema({
    userID : {
        type: mongoose.Types.ObjectId,
        required: true,
        validate: validateUserID
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