let yfsetBtn=document.querySelector('.yButSet');
const yearInputSet=document.querySelector('#yearselectionSetYGS');
const yearGoals=document.querySelector('#ygoals');
const date= new Date();
(async function(){
    const respYGS=await axios.get(`/YGS/get/${date.getFullYear()+1}`);
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
    const respMGS=await axios.get(`/MGS/get/${date.getFullYear()+1}/${date.getMonth()}`);
    const dataMGS=respMGS.data;
    const mgsCont=document.querySelector(".contentMGS")
    dataMGS.forEach((element,i) => {
        let h4=document.createElement('h4');
        h4.innerText=`${i+1}. ${element.goal}`;
        mgsCont.appendChild(h4);
    })
    
})();
yfsetBtn.addEventListener('click',async (e)=>{
    e.preventDefault();
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
})


let yfremBtn=document.querySelector('.yButRem');
const yearInputRem=document.querySelector('#yearselectionRemYGS');
const remYgoalInd=document.querySelector('#goalSelectionYGrem');
yfremBtn.addEventListener("click",async (e)=>{
    e.preventDefault();
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
})

let mfsetBtn=document.querySelector('.mButSet');
const yearInputSetMgs=document.querySelector('#yearselectionSetMGS');
const monthInputSetMgs=document.querySelector('#monthselectionSetMGS');
const mGoal=document.querySelector('#mgoals');
mfsetBtn.addEventListener('click',async (e)=>{
    e.preventDefault();
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
})

let mfremBtn=document.querySelector('.mButRem');
const yearInputRemMGS=document.querySelector('#yearselectionRemMGS');
const monthInputRemMGS=document.querySelector('#monselectionRemMGS');
const remMgoalInd=document.querySelector('#goalSelectionMGrem');
mfremBtn.addEventListener("click",async (e)=>{
    e.preventDefault();
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
})