function App() {
    function callFun() {
        alert("function called")
    }


    const fruit = (name) => {
        alert(name)
    }


    return (
        <div>
            <h1>Event and function call</h1>
            <button onClick={() => fruit("apple")}>Apple</button>
            <button onClick={() => fruit("Banana")}>Banana</button>
        </div>
    )
}

export default App