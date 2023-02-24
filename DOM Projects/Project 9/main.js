// DC143C

const titleText = document.querySelector(".caption .title");

titleText.style.color = "#dc143c";


const cartBtn = document.querySelector(".add-to-cart");

cartBtn.addEventListener("mouseover",()=>{
    cartBtn.style.backgroundColor = "#dc143c";
})

cartBtn.addEventListener("mouseout",()=>{
    cartBtn.style.backgroundColor = "#204637";
})