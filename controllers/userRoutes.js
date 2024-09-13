require("dotenv").config();
const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");

async function encrypt(str, saltRounds=8){
    const SECRET = process.env.SECRET || "";
    let passwordHash;
    bcrypt.hash(str + SECRET, saltRounds).then((hash)=>passwordHash=hash);
    return passwordHash;
}

// Root route
router.route('/')
    .get(async (_, res)=>{
        const allUsers = await User.find({});
        res.send(allUsers).status(200);
    })

// Routes for specific User by ID
router.route('/:id')
    .get(async (req, res)=>{
        const user = await User.findById(req.params.id);
        res.send(user).status(200);
    })
    .put(async (req, res)=>{ //TODO: add better securities
        ({email, username, password} = req.body);
        await User.findByIdAndUpdate(req.params.id, {
            email: email,
            username: username,
            passwordHash: await encrypt(password)
        })
        const updatedUser = await User.findById(req.params.id);
        console.log(`Success: User ${req.params.id} information updated`);
        res.json({user:updatedUser}).status(200);
    })
    .delete(async (req, res)=>{
        await User.findByIdAndDelete(req.params.id);
        console.log(`Success: User ${req.params.id} deleted`);
        res.json({message:"success"});
    })

module.exports = router;