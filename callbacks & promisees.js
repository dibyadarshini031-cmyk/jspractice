// console.log("one");
// console.log("two");
// console.log("three"); //synchronous programming executes in sequence

// function hello() {
//     console.log("hello");
// }

// setTimeout(hello, 2000) //timeout; execute after 2 sec

// console.log("four");
// console.log("five"); // doesn't wait for the timeout section to execute


// //         callback

// function SubmitEvent(a,b) {
//     console.log(a+b);
// }

// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
// }
// calculator(1, 2, (a,b) => {
//     console.log(a+b);
// });



//    Nesting

// let age = 19;
// if(age>=18) {
//     if (age >= 60) {
//         console.log("senior");
//     } else {
//         console.log("middle");
//     }
// } else {
//     console.log("child");

// }


// for(let i=0; i<5; i++) {
//     let str ="";
//     for(let j=0; j<5; j++) {
//         str = str + j;
//     }
//     console.log(i, str);
// }


// function getData(dataId, getNextData) {
//     //2s
//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData) {
//            getNextData();
//         }   
//     }, 2000)
//     ;
// }

// //     Callback hell
// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4);
//         });
//     });
// });



//       Promise


// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//        console.log("i am a promise");
//        resolve(123);
//        reject("pretty");
//     });
// };5


//  let promise = getPromise();
//  promise.then(() => {
//     console.log("promise fulfilled");
// });

// promise.catch((err) => {
//     console.log("rejected", err);
// });
// function getData(dataId, getNextData) {
//     return new promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("data", dataId);
//         resolve("success");
//         if(getNextData) {
//             getNextData();
//         }   
//       }, 2000);
//     });
// }



//   promise chain

// function asyncFunc1() {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data1");
//             resolve("success");
//         }, 4000);
//     })
// }
// function asyncFunc2() {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data2");
//             resolve("success");
//         }, 4000);
//     })
// }

// console.log("fetching data1....");
// asyncFunc1().then((res) => {
//     console.log("fetching data2....");
//     asyncFunc2().then((res) => {});
// })




//    async-await

//async function hello() {
//    console.log("hello");
//}

//  function api() {
//      return new promise((resolve, reject) => {
//          setTimeout(() => {
//            console.log("weather data");
//            resolve(200);
//         }, 2000);
//     });
// }
// async function getWeatherData() {
//     await api(); //1st
//     await api(); //2nd
// }

function getData(dataId) {
     return new Promise((resolve, reject) => {
       setTimeout(() => {
         console.log("data", dataId);
         resolve("success");   
       }, 2000);
    });
}
//Async-await
async function getAllData() {
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);
    
}

//  IIFE
(async function () {
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);
    console.log("getting data4....");
    await getData(4);
})();

