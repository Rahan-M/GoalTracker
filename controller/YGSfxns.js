const { json } = require('express');
const {readFile,writeFile}=require('fs');
const setYGS=(req,res)=>{
    const data=req.body;
    if(!data || data.year==="" || data.goals===""){
        return res
        .status(404)
        .json({succes:false,msg:"Please Enter Name"});
    }
    let goal=(data.goals).trim();
    const filePath=`./data/YGS${data.year}.json`
    // So I'm reading the file for that year's goals , if it doesn't exist we create it , if it does we append to it(not exactly)
    readFile(filePath,'utf-8',(err,data)=>{
        if(err && err.code === "ENOENT"){
            const newData={index:0,goal:goal};
            writeFile(filePath,JSON.stringify([newData],null,2), (err) => {
                if (err) {
                    console.error('Error appending to file:', err);
                } else {
                    console.log('Data appended successfully.');
                }});
            }else if(err) throw err;
            else{
                // What we are doing is we read the entire file which is just one array then we add the newData to that array and reWrite the file with new array
            const jsonData=JSON.parse(data);
            let length=Object.keys(jsonData).length;
            const newData={index:length-1,goal:goal};
            jsonData.push(newData);
            writeFile(filePath,JSON.stringify(jsonData,null,2), (err) => {
                if (err) {
                    console.error('Error appending to file:', err);
                } else {
                    console.log('Data appended successfully.');
                }});
        }
    })
    res.status(200).json({success:true,year:data.year});
}
const dltYGS=()=>{
    console.log("Not Defined Yet");
}

const getYGS=(req,res)=>{
    const {year}=req.params;
    const filePath=`./data/YGS${year}.json`
    readFile(filePath,'utf-8',(err,data)=>{
        if(err && err.code === "ENOENT"){
            let resp={success:false,msg:"please set goals",code:0};
            res.status(400).json(resp)
        }else if(err) throw err;
        else{
            data=JSON.parse(data);
            let resp={code:1,data:data};
            res.status(200).json(data)
        }
    })
}

module.exports={
    setYGS,
    dltYGS,
    getYGS
}