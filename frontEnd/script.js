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

