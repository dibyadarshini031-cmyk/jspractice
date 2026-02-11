// // // import User1 from "./User1"

// // import College from "./College";


// // // function App1() {


// // // const userData=[
// // //     {
// // //         name:'Lipsha',
// // //         age:'21',
// // //         email:"lipsha31@gmail.com",
// // //         id:1

// // //     },
// // //     {
// // //         name:'Sam',
// // //         age:'22',
// // //         email:"sam31@gmail.com",
// // //         id:2

// // //     },
// // //     {
// // //         name:'Petty',
// // //         age:'23',
// // //         email:"petty31@gmail.com",
// // //         id:3

// // //     },
// // //     {
// // //         name:'Baby',
// // //         age:'24',
// // //         email:"baby31@gmail.com",
// // //         id:4

// // //     }
// // // ]
// // // return (
// // //     <div>
// // //         <h1>Reuse component in Loop</h1>
// // // {
// // //     userData.map((user)=>(
// // //         <div key={user.id}>
// // //             <User1 data={user} />
// // //         </div>
// // //     ))
// // // }        
        
// // //     </div>
// // // );

// // // }

// // // export default App1





// // // import { useState } from "react"
// // // import Clock from "./Clock"


// // // function App1() {
// // //     const [color,setColor]=useState('green')
// // //     return (
// // //         <div>
// // //             <h1>Digital Clock in React js React Js</h1>
// // //             <select onChange={(event)=>setColor(event.target.value)}>
// // //                 <option value={"red"}>Red</option>
// // //                 <option value={"blue"}>Blue</option>
// // //                 <option value={"green"}>Green</option>


// // //             </select>
// // //             <Clock color={color} />
// // //         </div>
// // //     )
// // // }

// // // export default App1




// // //Nested Loop

// // function App1() {

// //     const collegeData = [
// //         {
// //             name: "ITER Bbubaneswar",
// //             city: "Bhubaneswar",
// //             website:"www.iter.com",
// //             student:[
// //                 {
// //                     name:"Lipsha",
// //                     age:'21',
// //                     email:"lipsha@gmail.com"
// //                 },
// //                 {
// //                     name:"Bhumi",
// //                     age:'21',
// //                     email:"bhumi@gmail.com"
// //                 },
// //                 {
// //                     name:"Lisha",
// //                     age:'21',
// //                     email:"lisha@gmail.com"
// //                 }
// //             ]
// //         },
// //         {
// //              name: "BPUT Rourkela",
// //             city: "Rourkela",
// //             website:"www.bput.com",
// //             student:[
// //                 {
// //                     name:"Lipsha",
// //                     age:'21',
// //                     email:"lipsha@gmail.com"
// //                 },
// //                 {
// //                     name:"Bhumi",
// //                     age:'21',
// //                     email:"bhumi@gmail.com"
// //                 },
// //                 {
// //                     name:"Lisha",
// //                     age:'21',
// //                     email:"lisha@gmail.com"
// //                 }
// //             ]
// //         },
// //         {
// //          name: "OUTR Bbubaneswar",
// //             city: "Bhubaneswar",
// //             website:"www.outr.com",
// //             student:[
// //                 {
// //                     name:"Lipsha",
// //                     age:'21',
// //                     email:"lipsha@gmail.com"
// //                 },
// //                 {
// //                     name:"Bhumi",
// //                     age:'21',
// //                     email:"bhumi@gmail.com"
// //                 },
// //                 {
// //                     name:"Lisha",
// //                     age:'21',
// //                     email:"lisha@gmail.com"
// //                 }
// //             ]
// //         }
// //     ]

// //     return(
// //         <div>
// //             <h1>Nested Looping with Component</h1>
// //             {
// //                 collegeData.map((college,index)=>(
// //                     <div key={index}>
// //                         <College college={college}/>
// //                 </div>        
// //                 ))
// //             }
// //         </div>
// //     )
// // }

// // export default App1;


// //06.02.2026

// //use effect hook


// import { useEffect, useState } from "react";

// function Hooks(){

// const [counter,setCounter]=useState(0);
// const [data,setData]=useState(0);

// //for both the state counter & data
// // useEffect(()=>{
// //     callOnce();

// // },[])


// //for only one state 
// useEffect(()=>{
//     //callOnce();
//     counterFunction();

// },[counter])


// function counterFunction(){
//     console.log("counterFunction",counter);
// }

//   function callOnce(){
//     console.log("callOnce function called");


//   }


//   return (
//     <div>
//         <h1>UseEffect Hook</h1>
//         <button onClick={()=>setCounter(counter+1)} >Counter {counter}</button>
//         <button onClick={()=>setData(data+1)} >Data {data}</button>
//     </div>
//   )



// }

// export default Hooks;





//07.02.2026


import { useEffect } from "react";

function Handleprops(){




const Counter=({count,data})=>{


    const handleCounter=()=>{
        console.log("handleCounter called");

    }

    const handleData=()=>{
        console.log("handleData called");

    }

    useEffect(()=>{
        handleCounter();
    },[])

    useEffect(()=>{
        handleData();
    },[data])


    
    return (
        <div>
            <h1>Counter Value</h1>
            <h1>Data Value</h1>
        </div>
    )

}
}

export default Handleprops