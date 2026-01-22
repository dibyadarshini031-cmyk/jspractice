// 22.01.2025


function Loop() {


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
        <h1>Loop in JSX with Map Function </h1>
        <table border="1">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Age</td>
                </tr>
            </thead>
            <tbody>
                {
                    userData.map((user)=>(
                    <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    </tr>
                    ))
                }
            </tbody>
        </table>

        <h1>Dummy Data</h1>
        <table border="1">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Age</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Lipsha</td>
                    <td>lipsha31@gmail.com</td>
                    <td>21</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Sam</td>
                    <td>sam31@gmail.com</td>
                    <td>22</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Petty</td>
                    <td>petty31@gmail.com</td>
                    <td>23</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Baby</td>
                    <td>baby31@gmail.com</td>
                    <td>24</td>
                </tr>

            </tbody>
        </table>
    </div>
)

}