const user = require("../models/userModel");

async function userRegister(req, res) {
    const { firstName, lastName, userName, password } = req.body;
    console.log(data);
    
    res.send("successfully registered");
}

const AuthController = {
    userRegister
}
module.exports = AuthController;