import {useState } from "react";
import Perso from "../model/Perso";
import "./card.css"

function Card({perso} : {perso : Perso}){

    const [compteur, setCompteur] = useState(0);
    return (
        <div className="card">
            <div>{perso.nomJoueur}</div>
            <div>{perso.nomPerso}</div>
            <div>{perso.score}</div>
            
            <div><button onClick={()=>{setCompteur(compteur+1)}}>Like</button> </div>
            <div>{compteur}</div>
        </div>
    )

}

export default Card;