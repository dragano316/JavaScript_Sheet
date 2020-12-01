const express=require("express");
require("./mongoose.js");
const Cat=require("./routes/cat")
const cors = require("cors");
const bodyParser = require("body-parser");




const app=express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(Cat)

app.get("/getcats",(req,res)=>{
    console.log("getting cats")
    res.send("sending data")
})

app.listen(3000,()=>{
    console.log("listening on port 3000")
})