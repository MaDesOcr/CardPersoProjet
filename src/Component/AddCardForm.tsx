import { useState } from "react";
import { addPerso } from "../data/data";
import Perso from "../model/Perso";


function addScore(nomPerso: string, nomJoueur: string, score : number){
    addPerso(new Perso(nomPerso, nomJoueur, score));
}
   
function addCardForm(){
    const [nomPerso, setNomPerso] = useState("nomPersoTest");
    const [nomJoueur, setNomJoueur] = useState("nomJoueurTest");
    const [score, setScore] = useState("scoreTest");

    return (
        <div className="formAdd">
            <input id="nomPerso" value={nomPerso} type="text" placeholder="NomPerso"
            onChange={e=> setNomPerso(e.target.value)}/>
            <input id="nomJoueur" type="text" placeholder="NomJoueur"
             onChange={e=> setNomJoueur(e.target.value)}/>
            <input id="score" type="number" placeholder="Score"
             onChange={e=> setScore(e.target.value)}/>
            <button onClick={()=>addScore(nomPerso, nomJoueur, score)}>Add</button>
        </div>
    )
}

export default addCardForm;