//import Login,{Profile,Setting, UserKey} from './usercomponent'


// function App(){
//     return(
//         <div>
//             <h1>Importing and Exporting components</h1>
//             <Login/>
//             <Profile/>
//             <Setting/>
//             <h1>{UserKey}</h1>
//         </div>
//     )
// }



// export default App;


//import { createElement } from "react" 
//function App() {
// const userName='Dibya Darshini Mahalik';
// let x=20;
// let y=30;
//   return (
//     <>
//     <h1> {userName}</h1>
//     <h1>{10+20+30}</h1>
//     <h1>{x*y}</h1>
//     <button onClick={()=>alert("hello")}>Click</button>


//     </>
//   )    


//without jsx 
//return createElement("div",{id:"rootDiv"},createElement{"h1",{class:'h1tag'},"Heading tag"})
//return createElement("div",{id:"rootDiv"},"hello div")
// return(
//   <div className="rootOther">Hello other</div>
// )
//}

//export default App


//for exercise
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


//jsx in curly braces

// function App() {
//     const name="Lipsha";
//     let x=10;
//     let y=20;
//     return (
//         <div>
//             <h1>JSX withn curly braces</h1>
//             <h1>{name}</h1>
//             <h1>{x+y}</h1>
//         </div>
//     )
// }

// export default App


function App() {
    const name="Lipsha"
    let x=10;
    let y=20;
    function Fruit(){
        return "Apple"
    }
    function Sum(a,b) {
        return a+b 
    }
    function Operation(a,b,Op){
        
        if(Op=="+"){
            return a+b;
        }else if(Op=="-"){
            return a-b;
        }else{
            return a*b
        }
    }
    return (
        <div>
            <h1>JSX withn curly braces</h1>
            <h1>{name}</h1>
            <h1>{x+y}</h1>
            <h1>{Fruit()}</h1>
            <h1>{Sum(10,100)}</h1>
            <h1>{Operation(20,10,"")}</h1>
        </div>
    )
}

export default App

// if name is not given or name is undefined then we can add
  //<h1>(name?name:"user not found")</h1>
  //output will be user not found



