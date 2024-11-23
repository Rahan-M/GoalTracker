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

const remWGs=async ()=>{
    const dateInputReWGS=document.querySelector('#dateselectionRemWGS');
    const reWGoalInd=document.querySelector('#goalSelectionWGrem');
    const datestr=dateInputReWGS.value;
    const dateObj={year:Number(datestr.slice(6,10)),
        month:Number(datestr.slice(3,5))-1,
        date:Number(datestr.slice(0,2))
    }
    const date=new Date(dateObj.year,dateObj.month,dateObj.date);
    const weekNo=getWeek(date);
    try{
        const data={
            year:dateObj.year,
            weekNo:weekNo,
            Ind:reWGoalInd.value
        }
        await axios.delete('WGS/rem',{
            data:data
        });
        darken();
    }catch(error){
        console.log(error);
    }
}

const setDGs=async ()=>{
    const dateInputSet=document.querySelector('#dateSelectionDGS');
    const dailyGoals=document.querySelector('#dgoals');
    const Fulldate=dateInputSet.value;
    const year=Number(Fulldate.slice(6,10));
    const month=Number(Fulldate.slice(3,5))-1;
    const date=Fulldate.slice(0,2);
    const dateCode=`${month}-${date}`;
    try{
        const data={
            year:year,
            dateCode:dateCode,
            goals:dailyGoals.value
        };
        await axios.post('/DGS/set',data);
        darken();
    }catch(error){
        console.log(error);
    }
}

const remDGs=async ()=>{
    const dateInputReDGS=document.querySelector('#dateselectionRemDGS');
    const reDGoalInd=document.querySelector('#goalSelectionDGrem');
    const dateStr=dateInputReDGS.value;
    const year=Number(dateStr.slice(6,10));
    const month=Number(dateStr.slice(3,5))-1;
    const date=dateStr.slice(0,2);
    const dateCode=`${month}-${date}`;
    try{
        const data={
            year:year,
            dateCode:dateCode,
            Ind:reDGoalInd.value
        }
        await axios.delete('/DGS/rem',{
            data:data
        });
        darken();
    }catch(error){
        console.log(error);
    }
}