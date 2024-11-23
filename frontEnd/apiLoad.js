const yearHead=document.querySelector(".yearGoalsHead");
const currDate=new Date();
yearHead.innerText=`${currDate.getFullYear()} Goals`;

const LoadYGS=async ()=>{
    const ygsCont1=document.querySelector(".content1YGS")
    const ygsCont2=document.querySelector(".content2YGS")
    const respYGS=await axios.get(`/YGS/get/${date.getFullYear()}`);
    if(respYGS.code==0){
        console.log("No Goals Set Yet");
        return;
    }
    const dataYGS=await respYGS.data;
    dataYGS.forEach((element,i) => {
        let h3=document.createElement('h3');
        h3.innerText=`${i+1}. ${element.goal}`;
        if(i%2==0){
            ygsCont1.appendChild(h3);
        }else ygsCont2.appendChild(h3);
    });
}

const LoadMGS=async ()=>{
    const date=new Date();
    try{
        const respMGS=await axios.get(`/MGS/get/${date.getFullYear()}/${date.getMonth()}`);
        const dataMGS=respMGS.data;
        const mgsCont=document.querySelector(".contentMGS")
        dataMGS.forEach((element,i) => {
            let h4=document.createElement('h4');
            h4.innerText=`${i+1}. ${element.goal}`;
            mgsCont.appendChild(h4);
        })
    }catch(err){
        console.log("No Goals Set Yet")
    }
}

const LoadWGS=async ()=>{
    const date=new Date();
    try{
        const respWGS=await axios.get(`/WGS/get/${date.getFullYear()}/${getWeek(date)}`);
        const dataWGS=await respWGS.data;
        const wgsCont=document.querySelector(".contentWGS")
        dataWGS.forEach((element,i) => {
            let h4=document.createElement('h4');
            h4.innerText=`${i+1}. ${element.goal}`;
            wgsCont.appendChild(h4);
        })
    }catch(err){
        console.log("No Goals Set Yet")
    }
}
const LoadDGS=async ()=>{
    const date=new Date();
    const dateCode= `${date.getMonth()}-${date.getDate()}`;
    try{
        const respDGS=await axios.get(`/DGS/get/${date.getFullYear()}/${dateCode}`);
        const dataDGS=await respDGS.data;
        const dgsCont=document.querySelector(".contentDGS")
        dataDGS.forEach((element,i) => {
            let h4=document.createElement('h4');
            h4.innerText=`${i+1}. ${element.goal}`;
            dgsCont.appendChild(h4);
        })
    }catch(err){
        console.log("No Goals Set Yet")
    }
}