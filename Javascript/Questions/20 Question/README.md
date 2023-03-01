## Question 20

### In the following shopping cart add, remove, edit items

    => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    - add 'Meat' in the beginning of your shopping cart if it has not been already added
    - add Sugar at the end of your shopping cart if it has not been already added
    - remove 'Honey'
    - modify Tea to 'Green Tea'

```javascript


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];


if(!shoppingCart.includes("Meat")){
    shoppingCart.unshift("Meat")
}

if(!shoppingCart.includes("Sugar")){
    shoppingCart.push("Sugar")
}

if(shoppingCart.includes("Honey")){
    let index = shoppingCart.indexOf("Honey");
    shoppingCart.splice(index,1);
}

if(shoppingCart.includes("Tea")){
    let index = shoppingCart.indexOf("Tea");
    shoppingCart[index] = "Green Tea";
}


console.log(shoppingCart);

```