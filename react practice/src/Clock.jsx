//4.02.2025

import { useEffect, useState } from "react"

const Clock = ({ color }) => {

    const [time, setTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    
    return () => clearInterval(interval);
    }, []);


    return (
        <div>
            <h1
                style={{ color: color, backgroundColor: "#000", width: "180px", padding: "10px", borderRadius: "10px" }}
            >{time}</h1>

        </div>
    )
}

export default Clock;