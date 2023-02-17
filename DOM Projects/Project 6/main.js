
const logos = document.querySelectorAll(".logo");

logos.forEach(e=>{
    e.src = `./assets/ineuron-logo.png`;
    e.style.width = "200px";
})

document.querySelector(".app_price span").innerText = "$10";