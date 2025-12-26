import Login,{Profile,Setting, UserKey} from './usercomponent'


function App(){
    return(
        <div>
            <h1>Importing and Exporting components</h1>
            <Login/>
            <Profile/>
            <Setting/>
            <h1>{UserKey}</h1>
        </div>
    )
}



export default App;