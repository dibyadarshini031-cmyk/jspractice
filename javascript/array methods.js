//let arr = ["pune", "delhi", "mumbai"];

//arr.forEach((val , idx, arr) => {
   // console.log(val.touppercase(), idx);
//});


//let nums = [2,3,4,5,6];

//nums.forEach((num) => {
    //console.log(num * num); //num**2
//});


//let num = [67,52,39];

//let calcSquare = ((num) => {
    //console.log(num * num);
  
//});
//num.forEach(calcSquare);



let nums= [67,78,39];

let newArr = nums.map((val) => {
    return val * 2;
});
 console.log(newArr);

 let calcSquare = (num) => {
    console.log(num * num);
 };



 let array = [3,9,5,8];

 const output = array.reduce((res, curr) => {
    return res + curr;
    // put prev in instead of res
    //for largest num 
    //return prev > curr ? prev : curr;
    //smallest
    // return prev < curr ? prev : curr;
 });
 console.log(output);


//practice
 //we are given array of marks of students. Filter out of the mark of students that scored 90+.

 let marks = [97,86,99,76,56,94,55,92,34];

 let toppers = marks.filter((val) => {
    return val > 90;
 });
 console.log(toppers);


 //take a number as input from user. create an array of numbers from 1 to n.
 const prompt = require("prompt-sync")();
 
 let n= prompt("enter a number : ");

 let arr =[];
 for(let i=1; i<=n; i++) {
    arr[i-1] = i;   //1(0), 2(1), 3(2)
 }
 console.log(arr);
