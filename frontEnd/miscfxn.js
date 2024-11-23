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