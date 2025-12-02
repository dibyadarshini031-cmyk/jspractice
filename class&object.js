// //const employee = {
//     //calcTax() {
//       // console.log("tax rate is 10%");
//     //},
// //};
// //const karanArjun1 = {
//   //  salary: 50000,
//     //calcTax() {
//       //  console.log("tax rate is 20%");
//     //}
// //}


// //karanArjun1.__proto__ = employee;


// //            classes in js

// //class ToyotaCar {
//   //constructor(brand, mileage) {
//     //console.log("creating new object");
//     //this.brand = brand;
//     //this.mileage = mileage;
//   //}
//     //start() {
//       //  console.log("start");
//     //}
//     //stop() {
//       //  console.log("stop");
//     //}
//     //setBrand(brand) {
//       //  this.brandName = brand;
//     //}
// //}

// //let fortuner = new ToyotaCar("fortuner", 10);//constuctor
// //console.log(fortuner);
// //let lexus = new ToyotaCar("lexus", 12);//constuctor
// //console.log(lexus);


// //           inheritance  

// //class person {
// //  constructor(name) {
// //    this.species = "homo sapiens";
//     this.name = name;
//   }
//   eat() {
//     console.log("eat");
//   }
//   sleep() {
//     console.log("sleep");
//   }
  
// }
// class Engineer extends person {
//   constructor(name) {
//     super(name); //to invoke parent class constuctor
//     this.branch = this.branch;
//   }
//   work() {
//     super.eat();
//     console.log("solve problem, build something");
//   }
// }

// let engObj = new Engineer("Dibyadarshini");



///   Practice Questions

//  let DATA = "Information";
//  class user {
//    constructor(name,email) {
//      this.name = name;
//      this.email = email;
//    }
//    viewData() {
//      console.log("Data = ", DATA);
//    }
//  }
//  class Admin extends user {
//   constructor(name, email) {
//     super(name, email);
//   }
//   editData() {
//     DATA = "some new value";
//   }
//  }

//  let student1 = new user("Lipsha", "lipsha@email.com");
//  let student2 = new user("Bhumi", "bhumi@email.com");

// let admin1 = new Admin("Admin", "admin@email.com");



//         Errror Handling

let a = 5;
let b = 10;
console.log("a =", a);
console.log("b =",b);
console.log("a+b =", a+b);
try {
  console.log("a-b =", a-c); //error
} catch(err) {
  console.log(err);
          
}
console.log("a-b =", a-b);
console.log("a-b =", a-b);
console.log("a-b =", a-b);
console.log("a-b =", a-b);