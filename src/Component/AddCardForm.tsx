import { useState } from "react";

function addScore(nomPerso: string){

    console.log("ADD");
    console.log(nomPerso);

}
   
function addCardForm(){
 const [nomPerso, setNomPerso] = useState("test");
    return (
        <div>
            <input id="nomPerso" value={nomPerso} type="text" placeholder="NomPerso"
            onChange={e=> setNomPerso(e.target.value)}/>
            <input id="nomJoueur" type="text" placeholder="NomJoueur"/>
            <input id="score" type="number" placeholder="Score"/>
            <button onClick={()=>addScore(nomPerso)}>Add</button>
        </div>
    )
}

export default addCardForm;