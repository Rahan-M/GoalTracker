let yfsetBtn=document.querySelector('.yBut');
const yearInput=document.querySelector('#yearselection');
const yearGoals=document.querySelector('#ygoals');
const date= new Date();
(async function(){
    const resp=await axios.get(`/YGS/get/${date.getFullYear()+1}`);
    const data=await resp.data;
    data.forEach((element,i) => {
        let h3=document.createElement('h3');
        const ygsCont1=document.querySelector(".content1YGS")
        const ygsCont2=document.querySelector(".content2YGS")
        h3.innerText=`${i+1}. ${element.goal}`;
        if(i%2==0){
            ygsCont1.appendChild(h3);
        }else ygsCont2.appendChild(h3);
    });
    
})();
yfsetBtn.addEventListener('click',async (e)=>{
    e.preventDefault();
    try{
        const data={
            year:yearInput.value,
            goals:yearGoals.value
        };
        await axios.post('/YGS/set',data);
        darken();
    }catch(error){
        console.log(error);
    }
})

