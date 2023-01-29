
let season = prompt("Enter the Month : ").toLowerCase();

if(season === "september" || season === "october" || season === "november"){
    alert("Autumn season");
}else if(season === "december" || season === "january" || season === "february"){
    alert("Winter season");
}else if(season === "march" || season === "april" || season === "may"){
    alert("Spring season");
}else{
    alert("Summer season");
}

