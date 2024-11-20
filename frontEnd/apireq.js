let yfsetBtn=document.querySelector('.yBut');
const yearInput=document.querySelector('#yearselection');
const yearGoals=document.querySelector('#ygoals');
const date= new Date()
// const getYGS=async()=>{
//     await axios.get(`/api/getYGs/${data.getFullYear()+1}`)
// }


yfsetBtn.addEventListener('click',async (e)=>{
    e.preventDefault();
    try{
        const data={
            year:yearInput.value,
            goals:yearGoals.value
        };
        await axios.post('/api/setYGs',data);
        darken();
    }catch(error){
        console.log(error);
    }
})

