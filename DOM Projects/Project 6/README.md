
### Live Demo : [link](https://sm8uti.github.io/Ineuron-Full-JavaScript-2.0/DOM%20Projects/Project%206)

<br>

## DOM Assignments 6

<br>

### Task 1

<br>

#### Question : change the logo to ineuron logo and also change the price 4 to 10 dollar

<br>

#### After Image

<br>

![image](./Output/DOM%20P3%20SS-1.png)
![image](./Output/DOM%20P3%20SS-2.png)

<br>

#### Solution

```Javascript

const logos = document.querySelectorAll(".logo");

logos.forEach(e=>{
    e.src = `./assets/ineuron-logo.png`;
    e.style.width = "200px";
})

document.querySelector(".app_price span").innerText = "$10";

```
