## Question 16

### Check if the season is Autumn, Winter, Spring or Summer. If the user input is

    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer

```javascript



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



```