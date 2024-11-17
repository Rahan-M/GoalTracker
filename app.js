const express=require('express');
app=express();
app.use(express.static("./frontEnd"));

app.listen(5000,()=>{
    console.log("listening on port 5000");
})