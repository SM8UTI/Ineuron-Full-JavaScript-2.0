## Question 19

### Create a countries.js file and store the countries name into this file, create a file web_techs.js and store the popular web technology names into this file. Access both file in a third file named main.js

#### Web_tech.js

```javascript

const web = ["HTML","CSS","Tailwind","SCSS","Javascript","React JS"]

module.exports = web;

```

#### countries.js

```javascript

const country = ["India","Russia","USA","UK","France","Germany"]

module.exports = country;

```

#### main.js

```javascript

const country = require("./countries");
const web = require("./web_techs");

console.log(country);
console.log(web);

```

