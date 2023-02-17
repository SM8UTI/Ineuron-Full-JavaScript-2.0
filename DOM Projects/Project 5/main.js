

function newCreateCard(cards){
    for(let i in cards){
        console.log(database_cards[0]);
        const parentDiv = document.createElement("div");
        parentDiv.className = "card";
    
        const childA = document.createElement("a");
        childA.className = "recipe-text";
        childA.href = cards[i].link;

        const childAchildImg = document.createElement("img");
        childAchildImg.className = "recipe-img";
        childAchildImg.src = cards[i].imgSrc;

        childA.appendChild(childAchildImg);

        const childAchildH5 = document.createElement("h5");
        childAchildH5.className = "recipe-name";
        childAchildH5.innerText = cards[i].name;

        childA.appendChild(childAchildH5);

        const childAchildP = document.createElement("p");
        childAchildP.className = "recipe-disp";
        childAchildP.innerText = cards[i].description;

        childA.appendChild(childAchildP);

        parentDiv.appendChild(childA);

        document.querySelector(".recipe-gallery").appendChild(parentDiv);

    }

}


let database_cards = [
    {
        name:"Godiva Angel Pie",
        description:"Prep : 30min | Cook : 1hour",
        imgSrc:"./Output/new-img.webp",
        link:"#"
    }
]


newCreateCard(database_cards);