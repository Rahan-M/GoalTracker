const setYGs=async ()=>{
    const yearInputSet=document.querySelector('#yearselectionSetYGS');
    const yearGoals=document.querySelector('#ygoals');
    try{
        const data={
            year:yearInputSet.value,
            goals:yearGoals.value
        };
        await axios.post('/YGS/set',data);
        darken();
    }catch(error){
        console.log(error);
    }
}

const remYGs=async()=>{
    const yearInputRem=document.querySelector('#yearselectionRemYGS');
    const remYgoalInd=document.querySelector('#goalSelectionYGrem');
    try{
        const data={
            year:yearInputRem.value,
            Ind:remYgoalInd.value
        }
        darken();
        await axios.delete('/YGS/rem',{
            data:data
        });
    }catch(error){
        console.log(error);
    }
}

const setMGs=async ()=>{
    const yearInputSetMgs=document.querySelector('#yearselectionSetMGS');
    const monthInputSetMgs=document.querySelector('#monthselectionSetMGS');
    const mGoal=document.querySelector('#mgoals');
    month=monthind(String(monthInputSetMgs.value));
    try{
        const data={
            year:yearInputSetMgs.value,
            mon:month,
            goals:mGoal.value
        };
        darken();
        await axios.post('/MGS/set',data);
    }catch(error){
        console.log(error);
    }
}

const remMGs=async ()=>{
    const yearInputRemMGS=document.querySelector('#yearselectionRemMGS');
    const monthInputRemMGS=document.querySelector('#monselectionRemMGS');
    const remMgoalInd=document.querySelector('#goalSelectionMGrem');
    let month=monthind(monthInputRemMGS.value);
    try{
        const data={
            year:yearInputRemMGS.value,
            month:month,
            Ind:remMgoalInd.value
        }
        await axios.delete('/MGS/rem',{
            data:data
        });
        darken();
    }catch(error){
        console.log(error);
    }
}

const setWGs=async ()=>{
    const dateInputSet=document.querySelector('#dateSelectionWGS');
    const weekGoals=document.querySelector('#wgoals');
    const Fulldate=dateInputSet.value;
    const year=Number(Fulldate.slice(6,10));
    const month=Number(Fulldate.slice(3,5))-1;
    const date=Number(Fulldate.slice(0,2));
    const reqDate=new Date(year,month,date);
    const weekNo=getWeek(reqDate);
    try{
        const data={
            year:year,
            weekNo:weekNo,
            goals:weekGoals.value
        };
        await axios.post('/WGS/set',data);
        darken();
    }catch(error){
        console.log(error);
    }
}
