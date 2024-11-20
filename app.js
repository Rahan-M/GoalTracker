const express=require('express');
const path=require('path');
const {readFile,writeFile}=require("fs");
const pathsetG=path.join(__dirname,'/frontEnd/setG.html')
app=express();
app.use(express.static("./frontEnd"));
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.post("/api/setYGs",async(req,res)=>{
    const data=req.body;
    if(!data){
        return res
            .status(404)
            .json({succes:false,msg:"Please Enter Name"});
    }
    res.status(200).json({success:true,year:data.year});
    await writeFile("./data/YGS.json",JSON.stringify(data),{ flag: 'a' }, (err) => {
        if (err) {
          console.error('Error appending to file:', err);
        } else {
          console.log('Data appended successfully.');
        }});
    console.log(data);

})

app.get("/api/getYGs/:year",(req,res)=>{
    const {year}=req.params;
    
    console.log(req.params);
})
app.listen(5000)