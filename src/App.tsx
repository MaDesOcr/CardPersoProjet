import Bonjour from "./Bonjour"
import getPersos from "./data/data";
import Card from "./Component/Card";
import "./App.css"

function App(){
    return (
        <div>
            <Bonjour name={"MOI"} age={25}/>
            <div className="cards">
                {getPersos().map((p) => (
                    <Card perso={p}/>
                ))}  
            </div>      
        </div>
    )
}

export default App;