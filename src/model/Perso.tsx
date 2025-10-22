class Perso{
    nomPerso : string;
    nomJoueur : string;
    score : number;

    constructor(nomPerso: string, nomJoueur : string, score : number){
        this.nomJoueur = nomJoueur;
        this.nomPerso = nomPerso;
        this.score = score;
    }
}

export default Perso;