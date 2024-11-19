const yfsetBtn=document.querySelector('.yBut');
const yearInput=document.querySelector('#yearselection');
const yearGoals=document.querySelector('#ygoals');
yfsetBtn.addEventListener('click',async (e)=>{
    e.preventDefault();
    const data={
        year:yearInput.value,
        goals:yearGoals.value
    };
    await axios.post('api/setYGs',data);
})