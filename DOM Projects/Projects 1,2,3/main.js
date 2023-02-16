
function task1(){
    let ul = document.querySelector("header nav ul");
    let li = document.createElement("li");
    li.innerHTML = `<a href="#">Hire me</a>`;
    ul.appendChild(li);
}

function task2(){
    let searchInput = document.querySelector(".search-field input");
    searchInput.placeholder = "Search my projects";
}

function task3(){
    let span = document.querySelectorAll(".hero-left-section p span")
    span[1].innerText = "an Employee";
    span[2].innerText = "iNeuron intelligence Pvt Ltd";
}

function task4(){
    let img = document.querySelector(".hero-right-section img");
    img.src = "./newAvatar.png";
}

function task5(){
    let btnGroups = document.querySelector(".hero-right-section-btns");
    let newBtn = document.createElement("button");
    newBtn.innerText = "Support me";
    btnGroups.appendChild(newBtn);
}


task1();
task2();
task3();
task4();
task5();