import { useState } from "react"


function Bonjour({name, age} : {name : string, age : number}){
    const [ageToDisplay, setAgeToDisplay] = useState(age);

    return(
        <p>
            Bonjour {name}, {ageToDisplay}
           {/* <img src="vite.svg"></img>
            <img src={iconReact}></img> */}
            <button onClick={()=>{
                setAgeToDisplay(ageToDisplay-1);
            }}>-</button>
            <button onClick={()=>{
                setAgeToDisplay(ageToDisplay+1);
            }}>+</button>
        </p>
    )

}

export default Bonjour