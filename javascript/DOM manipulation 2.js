//let para =document.querySelector("P");
//console.log(para.getAttribute("class"));
//console.log(para.setAttribute("class", "newClass"));

//let div =document.querySelector("div");

//div.style.backgroundcolor = "green";
//div.style.backgroundcolor = "pink";
//div.style.visibility = "hidden";

//div.style.fontSize = "26px";

//div.innerText = "Hello Lipsha!";



//let newBtn = document.createElement("button");
//newBtn.innerText = "click me!";
//console.log(newBtn);


//let div = document.querySelector("div");
//div.append(newBtn);      //adds at the end of the node
//div.prepend(newBtn);     //adds at the start of the node
//div.before(newBtn);      //adds before the node
//div.after(newBtn);          //adds after the node



let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);

let p = document.querySelector("p");
p.after(newBtn);



let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am Lipsha!</i>";

document.querySelector("body").prepend(newHeading);
//above is for insertion

let para = document.querySelector("P");
//for deletion
para.remove();

