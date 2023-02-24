
### Live Demo : [link](https://sm8uti.github.io/Ineuron-Full-JavaScript-2.0/DOM%20Projects/Project%208)

<br>

## DOM Assignments 8

<br>

### Task 1

<br>

#### Question : add some elements in the new class.

<br>

#### Before Image

<br>

![image](./ass8.1-before.png)

<br>

#### After Image

<br>

![image](./ass8.1-after.png)

<br>

#### Solution

```Javascript
const blogs = document.querySelector(".col-lg-4");
blogs.style.overflowY = "scroll";

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

```

<br>

### Task 2

<br>

#### Question : Change the background image or background in body element

<br>

#### Before Image

<br>

![image](./ass8.2-before.png)

<br>

#### After Image

<br>

![image](./ass8.2-after.png)

<br>

#### Solution

```Javascript
document.body.style.background = "#fff";

```

<br>

### Task 3

<br>

#### Question : Make prpoper functionality of a hamburger menu and open and close the menu

<br>

#### Before Image

<br>

![image](./ass8.3-before.png)

<br>

#### After Image

<br>

![image](./ass8.3-after.png)

<br>

#### Solution

```Javascript

const hamMenuBtn = document.querySelector(".navbar-toggler");
const collapseMenu = document.querySelector(".collapse");


hamMenuBtn.addEventListener("click",()=>{
    if(collapseMenu.style.display === "none" || collapseMenu.style.display === ""){
        collapseMenu.style.display = "block";
    }else{
        collapseMenu.style.display = "none";
    }
})
```
