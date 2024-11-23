const overlay=document.querySelector(".overlay");
const formElements=document.querySelectorAll('form');
const setBtns=document.querySelectorAll(".set");
const removeBtns=document.querySelectorAll(".remove");
let isDark=false;
const darken=()=>{
    if(isDark){
        overlay.style.display="none";
        isDark=!isDark;
        formElements.forEach((element,i)=>{
            element.style.display="none"
            isDark=false;
        })
    }
    else{
        overlay.style.display="block";
        isDark=true;
    }
}

overlay.addEventListener('click',darken);


const ysetBtn=document.querySelector(".setYGS");
const ysetform=document.querySelector(".ygsSetForm");
ysetBtn.addEventListener('click',()=>{
    ysetform.style.display="block";
    darken();
})

const yremBtn=document.querySelector(".removeYGS");
const yremform=document.querySelector(".ygsRemForm");
yremBtn.addEventListener('click',()=>{
    yremform.style.display="block";
    darken();
})

const msetBtn=document.querySelector(".setMGS");
const msetform=document.querySelector(".mgsSetForm");
msetBtn.addEventListener('click',()=>{
    msetform.style.display="block";
    darken();
})

const mremBtn=document.querySelector(".remMGS");
const mremform=document.querySelector(".mgsRemForm");
mremBtn.addEventListener('click',()=>{
    mremform.style.display="block";
    darken();
})

const wsetBtn=document.querySelector(".setWGS");
const wsetform=document.querySelector(".wgsSetForm");
wsetBtn.addEventListener('click',()=>{
    wsetform.style.display="block";
    darken();
})