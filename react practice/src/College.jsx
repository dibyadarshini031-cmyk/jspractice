//05.02.2026


//Nested Loop


const College = ({college}) => {
    console.log(college);


    return (
        <div style={{
            backgroundColor:"#783333",
            padding:"20px",
            borderBottom:"2px solid #000",
            margin:"20px",
            borderRadius:"10px"
        }}>
            <h1>Name: {college.name}</h1>
            <ul>
                <li>
                    <h3>City: {college.city}</h3>
                </li>
                <li>
                    <h3>website: {college.website}</h3>
                </li>
                <li>
                    {
                        college.student.map((student)=>(
                            <div>
                                <h4>{student.name}</h4>
                            </div>
                        ))
                    
                    }
                </li>
            </ul>
        </div>        
                
            
    
    )
}

export default College