// import ToDo from "./ToDo"

// function App() {
//   return(
//     <div>
//       <h1>JSX Exercise</h1>
//       <ToDo/>
//     </div>
//   )
// }

// export default App



// function App() {
//     const name = "Lipsha"
//     const userObj = {
//         name: "Dibya Mahalik",
//         email: "dibyadarshini031@gmail.com",
//         age: 21
//     }
//     const userArray = ['sam', 'Lipsha', 'Lipi']
//     let x = 10;
//     let y = 20;
//     let path = "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.99967xh;center,top&resize=1200:*"
//     function Fruit() {
//         return "Apple"
//     }
//     function Sum(a, b) {
//         return a + b
//     }
//     function Operation(a, b, Op) {

//         if (Op == "+") {
//             return a + b;
//         } else if (Op == "-") {
//             return a - b;
//         } else {
//             return a * b
//         }
//     }
//     return (
//         <div>
//             <h1>JSX withn curly braces</h1>
//             <h1>{name}</h1>
//             <h1>{x + y}</h1>
//             <h1>{Fruit()}</h1>
//             <h1>{Sum(10, 100)}</h1>
//             <h1>{Operation(20, 10, "")}</h1>
//             <h1>{userObj.age}</h1>
//             <h1>{userArray[0]}</h1>
//             <input type="text" value={name} id={name}  />
//             <br/>
//             <img
//                 src={path}
//             />
//         </div>
//     )
// }

// export default App


// function App() {
//     function callFun() {
//         alert("function called")
//     }


//     const fruit = (name) => {
//         alert(name)
//     }


//     return (
//         <div>
//             <h1>Event and function call</h1>
//             <button onClick={() => fruit("apple")}>Apple</button>
//             <button onClick={() => fruit("Banana")}>Banana</button>
//         </div>
//     )
// }

// export default App



//using of state


// import { useState } from "react";
// function App() {
//     const [fruit, setFruit] = useState("Apple");
//     const handleFruit = () => {
//         setFruit("Banana")


//     }

//     return (
//         <div>
//             <h1>State in React JS</h1>
//             <h1>{fruit}</h1>
//             <button onClick={handleFruit} >change Fruit Name</button>


//         </div>
//     )
// }

// export default App

import { UseState } from "react";

const Counter = () => {
    const [count, setCount] = UseState(0);
    const [rCounter,setRCounter]= UseState(10)

    return (
        <div>
            <h1>Counter:{count}</h1>
            <h2>R counter: {rCounter}</h2>
            <button onClick={() => setCount(count + 1)}>Update Counter</button>
            <button onClick={() => setRCounter(rcounter - 1)}>Update  R Counter</button>
        </div>
    )
}

export default Counter;