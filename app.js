//creating sections and add link to them (1st )
let sections =document.querySelectorAll("section");
let myURL=document.getElementById("navbar__list");
const fragment=document.createDocumentFragment();
sections.forEach(function(item,index){
let linkText= item.getAttribute("data-nav");
let myLink=document.createElement("a");
let myLine = document.createElement("li");
//myLine.className="myclass";
myLine.style.cssText='color:#cc1;padding:15px;'
let textNode=document.createTextNode(linkText);
myLink.appendChild(textNode);
myLine.appendChild(myLink);
fragment.appendChild(myLine);
myLine.addEventListener("click", function(){
    item.scrollIntoView({behavior:"smooth"});
})
});
myURL.appendChild(fragment);


//make highlight on the section and Link while scrolling(2nd)

window.onscroll=function active(){
    sections.forEach(function(activate){
        if (activate.getBoundingClientRect().top>=-400&& activate.getBoundingClientRect().top<=150 ){
         const secNav = activate.getAttribute("data-nav");
            activate.classList.add("your-active-class");
            const myLink= document.querySelectorAll('a');
            myLink.forEach(aLink=>{
if (aLink.innerText==secNav){
    myLink.forEach((act_link)=>{
        act_link.style.backgroundColor="white";
    })
aLink.style.backgroundColor="yellow";
}
            })
        }
        else{
            activate.classList.remove("your-active-class");
        
        }
    })
}

//going to exact section when clicking on the links
const links =document.querySelectorAll("a")
const myscroll=()=>{
links.forEach(link=>{
    link.addEventListener("click",function(){
        for (i=0;i<sections; i++){
            sections[i].addEventListener("click",myscroll)
        }
    })
})
}
