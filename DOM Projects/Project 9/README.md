
### Live Demo : [link](https://sm8uti.github.io/Ineuron-Full-JavaScript-2.0/DOM%20Projects/Project%209)

<br>

## DOM Assignments 9

<br>

### Task 1

<br>

#### Question : change the color of the title text 

<br>

#### Before Image

<br>

![image](./ass9.1-before.png)

<br>

#### After Image

<br>

![image](./ass9.1-after.png)

<br>

#### Solution

```Javascript

const titleText = document.querySelector(".caption .title");

titleText.style.color = "#dc143c";

```

<br>

### Task 2

<br>

#### Question : Make hover effect using the javascript

<br>

#### Before Image

<br>

![image](./ass9.2-before.png)

<br>

#### After Image

<br>

![image](./ass9.2-after.png)

<br>

#### Solution

```Javascript
const cartBtn = document.querySelector(".add-to-cart");

cartBtn.addEventListener("mouseover",()=>{
    cartBtn.style.backgroundColor = "#dc143c";
})

cartBtn.addEventListener("mouseout",()=>{
    cartBtn.style.backgroundColor = "#204637";
})
```
