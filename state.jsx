import { useState } from "react";
function App() {
    const [fruit, setFruit] = useState("Apple");
    const handleFruit = () => {
        setFruit("Banana")


    }

    return (
        <div>
            <h1>State in React JS</h1>
            <h1>{fruit}</h1>
            <button onClick={handleFruit} >change Fruit Name</button>


        </div>
    )
}

export default App