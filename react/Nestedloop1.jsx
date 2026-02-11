function Nestedloop1() {

    const collegeData = [
        {
            name: "ITER Bbubaneswar",
            city: "Bhubaneswar",
            website:"www.iter.com",
            student:[
                {
                    name:"Lipsha",
                    age:'21',
                    email:"lipsha@gmail.com"
                },
                {
                    name:"Bhumi",
                    age:'21',
                    email:"bhumi@gmail.com"
                },
                {
                    name:"Lisha",
                    age:'21',
                    email:"lisha@gmail.com"
                }
            ]
        },
        {
             name: "BPUT Rourkela",
            city: "Rourkela",
            website:"www.bput.com",
            student:[
                {
                    name:"Lipsha",
                    age:'21',
                    email:"lipsha@gmail.com"
                },
                {
                    name:"Bhumi",
                    age:'21',
                    email:"bhumi@gmail.com"
                },
                {
                    name:"Lisha",
                    age:'21',
                    email:"lisha@gmail.com"
                }
            ]
        },
        {
         name: "OUTR Bbubaneswar",
            city: "Bhubaneswar",
            website:"www.outr.com",
            student:[
                {
                    name:"Lipsha",
                    age:'21',
                    email:"lipsha@gmail.com"
                },
                {
                    name:"Bhumi",
                    age:'21',
                    email:"bhumi@gmail.com"
                },
                {
                    name:"Lisha",
                    age:'21',
                    email:"lisha@gmail.com"
                }
            ]
        }
    ]

    return(
        <div>
            <h1>Nested Looping with Component</h1>
            {
                collegeData.map((college,index)=>(
                    <div key={index}>
                        <College college={college}/>

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
                </div>        
                ))
            }
        </div>
    )
}

export default Nestedloop1;


//this will show the college name with data we have entered
//and with the student data............
