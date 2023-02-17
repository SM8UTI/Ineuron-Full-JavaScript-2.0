function colorCard(color){
    const cardStats = Array.from(document.querySelectorAll(".clash-card__unit-stats"));

    const cardStatsElem = Array.from(document.querySelectorAll(".one-third.no-border"));

    console.log(cardStatsElem);
    for(let i in color){
        cardStats[i].style.backgroundColor = color[i];
        cardStats[i].style.color = "#fff";
        cardStatsElem[i].style.color = "#fff";
    }
}


let colors = ["#bd7c2f","#d04976","#de7b09","#71a32a","#309eff"];

colorCard(colors);