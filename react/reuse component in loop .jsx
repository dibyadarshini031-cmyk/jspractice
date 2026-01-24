/// 24.01.2025


import User1 from "./user1"


function App1() {


const userData=[
    {
        name:'Lipsha',
        age:'21',
        email:"lipsha31@gmail.com",
        id:1

    },
    {
        name:'Sam',
        age:'22',
        email:"sam31@gmail.com",
        id:2

    },
    {
        name:'Petty',
        age:'23',
        email:"petty31@gmail.com",
        id:3

    },
    {
        name:'Baby',
        age:'24',
        email:"baby31@gmail.com",
        id:4

    }
]
return (
    <div>
        <h1>Reuse component in Loop</h1>
{
    userData.map((user)=>(
        <div key={user.id}>
            <User1 data={user} />
        </div>
    ))
}        
        
    </div>
);

}

export default App1


//this will import data from User1 and displays the above user data

// react repeats UI using .map()
//.map() works only on arrays
//each item -> one component