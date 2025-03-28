const jwt = require("jsonwebtoken");
const user = require("../modules/userModel");

const tokenGenerate = ()=>{
    return jwt.sign(
        {
            email:user.email
        },
        process.env.SECRET_KEY,
        {
            expiresIn:"30d"
        }
    )
}

module.exports = tokenGenerate;