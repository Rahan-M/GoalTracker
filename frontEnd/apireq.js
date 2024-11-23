const date= new Date();
LoadYGS();
LoadMGS();
LoadWGS();
let yfsetBtn=document.querySelector('.yButSet');
yfsetBtn.addEventListener('click',async (e)=>{
    e.preventDefault();
    setYGs();
})


let yfremBtn=document.querySelector('.yButRem');
yfremBtn.addEventListener("click",async (e)=>{
    e.preventDefault();
    remYGs();
})

let mfsetBtn=document.querySelector('.mButSet');
mfsetBtn.addEventListener('click',async (e)=>{
    e.preventDefault();
    setMGs()
})

let mfremBtn=document.querySelector('.mButRem');
mfremBtn.addEventListener("click",async (e)=>{
    e.preventDefault();
    remMGs();
})

let wfsetBtn=document.querySelector('.wButSet');
wfsetBtn.addEventListener('click',async (e)=>{
    e.preventDefault();
    setWGs()
})
let wfremBtn=document.querySelector('.wButRem');
wfremBtn.addEventListener('click',async (e)=>{
    e.preventDefault();
    remWGs()
})