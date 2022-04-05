const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const taskRoutes = require("./routes/addTask")

const app = express();
const port = process.env.PORT || 9000;


//middleware
app.use(express.json());
app.use('/api',taskRoutes)




//routes

app.get("/",(req,res)=>{
    res.send("welcome to my API");
});

// mongodb connection

mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>console.log("Conectado a mongoDB atlas"))
    .catch((error)=> console.error(error));

app.listen(port,() => console.log('server listing on port', port));