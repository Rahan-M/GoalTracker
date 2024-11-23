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
    const filePath=`./data/WGS${data.year}-W${data.weekNo}.json`
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
const getWGS=(req,res)=>{
    const {year,weekNo}=req.params;
    const filePath=`./data/WGS${year}-W${weekNo}.json`
    readFile(filePath,'utf-8',(err,data)=>{
        if(err && err.code === "ENOENT"){
            console.log("Reached till this point")
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
const dltWGS=(req,res)=>{
    const data=req.body; //{ year: '2025', weekNo: 47, Ind: '1' }
    const tar=Number(data.Ind)-1;
    const filePath=`./data/WGS${data.year}-W${data.weekNo}.json`
    readFile(filePath,'utf-8',(err,data)=>{
        if(err && err.code==="ENOENT") return res.json({success:false,msg:"No goals set for this week"}); 
        else if(err) throw err;
        else{
            //Current Plan : Iterate through the object , find index delete that , update all other indices
            let jsonData=JSON.parse(data);
            jsonData=jsonData.filter(obj => Number(obj.index)!==tar);
            jsonData.forEach((element) => {
                if(element.index>tar) element.index=Number(element.index)-1;
            });
            writeFile(filePath,JSON.stringify(jsonData,null,2),(err)=>{
                if(err){
                    console.log("Error during deletion : ",err);
                    return res.status(400).json({success:false,msg:"Error during rewriting file"});
                }
                else {
                    console.log("Goal Removed Succesfully");
                }
            })
        }
    })
    return res.status(200).json({success:true,msg:"Goal Removed Succesfully"});

}
module.exports={
    setWGS,
    getWGS,
    dltWGS
}