const express = require("express");
const { login, signup } = require("../Controllers/authentication");
const  scheduleMessage  = require("../Controllers/scheduleMessageController");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/scheduleMessage",scheduleMessage)
module.exports = router;