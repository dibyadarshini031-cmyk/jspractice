let numbers = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log("Sum =", sum);


//another example
let student = [
    { name: "Lipsha", age: 21},
    { name: "Bhumi", age: 22},
    { name: "Lisha", age: 23}
];
for(let i=0; i< student.length; i++){
    console.log(student[i].name);
}