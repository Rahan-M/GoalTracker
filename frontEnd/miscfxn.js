const monthind=(monthStr)=>{
    monthStr=monthStr.toLowerCase();
    if(monthStr=="january") return 0;
    else if(monthStr=="february") return 1;
    else if(monthStr=="march") return 2;
    else if(monthStr=="april") return 3;
    else if(monthStr=="may") return 4;
    else if(monthStr=="june") return 5;
    else if(monthStr=="july") return 6;
    else if(monthStr=="august") return 7;
    else if(monthStr=="september") return 8;
    else if(monthStr=="october") return 9;
    else if(monthStr=="november") return 10;
    else if(monthStr=="december") return 11;
}
const getWeek=(date)=>{ // dom- date of monday
    let copy=new Date(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate()));
    // Now we set the copy of the date to the thursday of that week because in ISO standards the year the first week is the week containing thursday and thursday also happens to be in the middle so ti will accruate calculations I assume
    //We do this by adding the date by 4 and subtracting the day number
    // In ISO the week begins on Monday but this is my game and here rit begins on Sunday
    copy.setUTCDate(copy.getUTCDate()+4-copy.getUTCDay());
    const firstDay=new Date(Date.UTC(date.getFullYear(),0,1));
    const weekNo=Math.ceil((((copy-firstDay)/86400000)+1)/7);
    return weekNo;
}