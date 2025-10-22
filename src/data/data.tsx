import Perso from "../model/Perso";
import listpersos from "./persos.json";

function getPersos() {
    const listP : Perso[] =
     listpersos.listpersos
     .map((p=>new Perso(p.nomJoueur,
         p.nomPerso,
          p.score)));
    //fetch("./persos.json");
    console.log(listP)
    return listP;
}
export default getPersos;


/*

let persos: Perso[] = [];

const getPersos = async () => {
    try {
        const response = await fetch('/src/data/persos.json');
        const data = await response.json();
        persos = data.map((p: any) => new Perso(p.nomPerso, p.nomJoueur, p.score, p.like));
        return persos;
    } catch (error) {
        console.error('Erreur lors de la lecture du JSON:', error);
        return [];
    }
};

export { getPersos };
export default persos;

*/