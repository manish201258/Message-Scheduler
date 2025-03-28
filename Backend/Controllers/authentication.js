const generateToken = require("../../../Chat App/backend/controllers/generateToken");
const user = require("../modules/userModel");
const { tokenGenerate } = require("./tokenGenerate");

const signup = async(req, res) => {
    const { name, email, course, password } = req.body;
    
    try {
        if (!name || !email || !course || !password) {
            return res.json({ msg: "All fields are required!" }); 
        }
        const userExist = await user.findOne({email:email});
        
        if(userExist){
            return res.status(409).json("User already exist!")
        }

        const createUser = await user.create({
            name,email,course,password
        })

        return res.status(201).json({
            msg:"Register Success",
            token:generateToken()
        })
    } catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({ msg: "Server Error" });
    }
};

const login = async(req, res) => {
    const {email,password } = req.body;
    
    try {
        if (!email ||!password) {
            return res.json({ msg: "All fields are required!" }); 
        }
        const userExist = await user.findOne({email:email});
        
        if(!userExist){
            return res.status(401).json("Invalid details")
        }

        if(password!=userExist.password){
            return res.status(401).json("Invalid details")
        }

        return res.status(200).json({
            msg:"User Login success!",
            token:generateToken()
        })
    } catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({ msg: "Server Error" });
    }
};

module.exports = { signup, login };
