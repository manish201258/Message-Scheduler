require('dotenv').config()
const mongoose  = require("mongoose");

const url =  process.env.DB_URL;
const dbConnect = async()=>{
    try {
        await mongoose.connect(url);
        console.log("Connection Done!");
    } catch (error) {
        console.log("Connection Failed");
    }
}
module.exports = dbConnect;