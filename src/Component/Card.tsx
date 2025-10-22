import Perso from "../model/Perso";
import "./card.css"

function Card({perso} : {perso : Perso}){
    return (
        <div className="card">
            {perso.nomJoueur}
            {perso.nomPerso}
            {perso.score} 
        </div>
    )

}

export default Card;