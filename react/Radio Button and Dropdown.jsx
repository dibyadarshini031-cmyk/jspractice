///16.01.2025

import { useState } from "react"


function Radio (){



    const [gender,setGender]=useState('female')
    const [city,setCity]=useState('delhi')


    return (
        <div>
            <h1>Handle Radio and Dropdown</h1>
            <h4>Select Gender</h4>
            <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" 
            value={"male"} checked={gender=='male'} id="male" />
            <label htmlfor="male">Male</label>
            <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" 
            value={"female"} checked={gender=='female'} id="female" />Female
            <label htmlfor="male">Female</label>
            <h2>Selected Gender :(gender)</h2>
            <br /><br></br>
            <h4>Select City</h4>
            <select onChange={(event)=>setCity(event.target.value)} defaultvalue={"delhi"}>
                <option value="noida">Noida</option>
                <option value="delhi">Delhi</option>
                <option value="kochi">Kochi</option>
                <option value="himalaya">Himalaya</option>


            </select>
            <h2>Selected City :{city}</h2>
        </div>
    )

}

export default Radio;