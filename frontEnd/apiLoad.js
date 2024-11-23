const yearHead=document.querySelector(".yearGoalsHead");
const currDate=new Date();
yearHead.innerText=`${currDate.getFullYear()} Goals`;

const LoadYGS=async ()=>{
    const respYGS=await axios.get(`/YGS/get/${date.getFullYear()}`);
    const dataYGS=await respYGS.data;
    dataYGS.forEach((element,i) => {
        let h3=document.createElement('h3');
        const ygsCont1=document.querySelector(".content1YGS")
        const ygsCont2=document.querySelector(".content2YGS")
        h3.innerText=`${i+1}. ${element.goal}`;
        if(i%2==0){
            ygsCont1.appendChild(h3);
        }else ygsCont2.appendChild(h3);
    });
}

const LoadMGS=async ()=>{
    const date=new Date();
    const respMGS=await axios.get(`/MGS/get/${date.getFullYear()}/${date.getMonth()}`);
    const dataMGS=respMGS.data;
    const mgsCont=document.querySelector(".contentMGS")
    dataMGS.forEach((element,i) => {
        let h4=document.createElement('h4');
        h4.innerText=`${i+1}. ${element.goal}`;
        mgsCont.appendChild(h4);
    })
}

const LoadWGS=async ()=>{
    const date=new Date();
    const respWGS=await axios.get(`/WGS/get/${date.getFullYear()}/${getWeek(date)}`);
    const dataWGS=await respWGS.data;
    const wgsCont=document.querySelector(".contentWGS")
    dataWGS.forEach((element,i) => {
        let h4=document.createElement('h4');
        h4.innerText=`${i+1}. ${element.goal}`;
        wgsCont.appendChild(h4);
    })
}