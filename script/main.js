
//partnersection
const root=document.documentElement;
const marqueeElementsDisplayed=getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent=document.querySelector(".marquee-content");

root.style.setProperty("--marquee-elements",marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed;i++){
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

//animation intro
let intro=document.querySelector('.intro');
let logo=document.querySelector('.logo-header');
let logoSpan= document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>{
        logoSpan.forEach((span, idx)=>{ 
            setTimeout(()=>{
                span.classList.add('active');
            },(idx + 1) * 400)
        });
        setTimeout(()=>{
            logoSpan.foreach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                },(idx+1)*50)
            })
        },2000);
        setTimeout(()=>{
            intro.style.top='-100vh';
        },2300);
    })
})