const express=require('express');
const path=require('path');
const pathsetG=path.join(__dirname,'/frontEnd/setG.html')
app=express();
app.use(express.static("./frontEnd"));
app.listen(5000,()=>{
    console.log("listening on port 5000");
})