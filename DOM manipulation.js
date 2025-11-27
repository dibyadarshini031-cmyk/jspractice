console.log(document.body);
console.log(document.head);
//dynamic changes: DOM

document.getElementById("myId")
//selecting with id
let heading = document.getElementById("my-class");
console.dir(heading);
//h1#heading

document.getElementsByClassName("my-Class")
//selecting with class
let headings = document.getElementsByClassName("heading-class");
console.dir(headings);
console.log(headings);

document.getElementsByTagName("p")
//selecting with tag
let parahs = document.getElementsByTagName("p");
console.dir(parahs);

//query selector
let firstEl = document.querySelector("p");  //1st element
console.dir(firstEl);

let allEl = document.querySelectorAll("p");  //all element
console.dir(allEl);


let firstIdEl = document.querySelector("#myId");  //1st element
console.dir(firstEl);

