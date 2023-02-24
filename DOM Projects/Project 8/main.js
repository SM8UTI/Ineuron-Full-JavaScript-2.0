const blogs = document.querySelector(".col-lg-4");
blogs.style.overflowY = "scroll";

document.body.style.background = "#fff";


function addNewElement(h2,p){
    let newH2 = document.createElement("h2");
    let newP = document.createElement("p");
    let newHr = document.createElement("hr");

    newH2.className = "new-head";
    newP.className = "new-p";
    newHr.className = "hr-line";

    newH2.innerText = h2;
    newP.innerText = p;

    blogs.appendChild(newHr);
    blogs.appendChild(newH2).appendChild(newP);


}

const blogsData = [
    {
        h2:"Hydrogen VS Electric Cars",
        p:"Will hydrogen-fueled cars ever catch up to EVs?"
    },
    {
        h2:"One year of war in Ukraine",
        p:"As conflict drags on, a changed Europe, India under pressure"
    }
]

for(let i in blogsData){
    addNewElement(blogsData[i].h2,blogsData[i].p);
}


const hamMenuBtn = document.querySelector(".navbar-toggler");
const collapseMenu = document.querySelector(".collapse");


hamMenuBtn.addEventListener("click",()=>{
    if(collapseMenu.style.display === "none" || collapseMenu.style.display === ""){
        collapseMenu.style.display = "block";
    }else{
        collapseMenu.style.display = "none";
    }
})