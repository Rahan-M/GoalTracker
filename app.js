const express=require('express');
const path=require('path');
const {readFile,writeFile, read}=require("fs");
const YGS=require("./routes/YGS");
const MGS=require("./routes/MGS");
const WGS=require("./routes/WGS");
const DGS=require("./routes/DGS");

app=express();
app.use(express.static("./frontEnd"));
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())
app.use("/YGS",YGS)
app.use("/MGS",MGS)
app.use("/WGS",WGS)
app.use("/DGS",DGS)

app.listen(5000,()=>{
    console.log("Server is running on http://localhost:5000")
})