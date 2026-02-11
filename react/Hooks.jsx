//06.02.2026

//use effect hook




function Hooks(){

const [counter,setCounter]=useState(0);
const [data,setData]=useState(0);

//for both the state counter & data
useEffect(()=>{
    callOnce();

},[])


//for only one state 
useEffect(()=>{
    //callOnce();
    counterFunction();

},[counter])


function counterFunction(){
    console.log("counterFunction",counter);
}

  function callOnce(){
    console.log("callOnce function called");


  }


  return (
    <div>
        <h1>UseEffect Hook</h1>
        <button onClick={()=>setCounter(counter+1)} >Counter {counter}</button>
        <button onClick={()=>setData(data+1)} >Data {data}</button>
    </div>
  )



}

export default Hooks;


