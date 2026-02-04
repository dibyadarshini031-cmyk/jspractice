// import User1 from "./User1"


// function App1() {


// const userData=[
//     {
//         name:'Lipsha',
//         age:'21',
//         email:"lipsha31@gmail.com",
//         id:1

//     },
//     {
//         name:'Sam',
//         age:'22',
//         email:"sam31@gmail.com",
//         id:2

//     },
//     {
//         name:'Petty',
//         age:'23',
//         email:"petty31@gmail.com",
//         id:3

//     },
//     {
//         name:'Baby',
//         age:'24',
//         email:"baby31@gmail.com",
//         id:4

//     }
// ]
// return (
//     <div>
//         <h1>Reuse component in Loop</h1>
// {
//     userData.map((user)=>(
//         <div key={user.id}>
//             <User1 data={user} />
//         </div>
//     ))
// }        
        
//     </div>
// );

// }

// export default App1





import { useState } from "react"
import Clock from "./Clock"


function App1() {
    const [color,setColor]=useState('green')
    return (
        <div>
            <h1>Digital Clock in React js React Js</h1>
            <select onChange={(event)=>setColor(event.target.value)}>
                <option value={"red"}>Red</option>
                <option value={"blue"}>Blue</option>
                <option value={"green"}>Green</option>


            </select>
            <Clock color={color} />
        </div>
    )
}

export default App1