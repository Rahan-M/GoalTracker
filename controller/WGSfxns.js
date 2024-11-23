const { json } = require('express');
const {readFile,writeFile}=require('fs');
const { stringify } = require('querystring');
const setWGS=(req,res)=>{
    const data=req.body;
    let goal=(data.goals).trim(); 
    if(!data || data.year==="" || goal===""){
        return res
        .status(404)
        .json({succes:false,msg:"Please fill the blanks"});
    }
    const filePath=`./data/MGS${data.year}-W${data.weekNo}.json`
    // So I'm reading the file for that week's goals , if it doesn't exist we create it , if it does we append to it(not exactly)
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
            const newData={index:length,goal:goal};
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

module.exports={
    setWGS
}