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