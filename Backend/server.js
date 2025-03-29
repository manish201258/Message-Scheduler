const express = require("express");
require('./cron');
const cors = require("cors")
require("dotenv").config();
const app = express();
const router = require("./router/auth_route");
const dbConnect = require("./modules/dbConnect");
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/auth/api", router);

dbConnect().then(()=>{
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
      });
})
