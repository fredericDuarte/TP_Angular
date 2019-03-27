/* ************************* Personne  *********************  */

export enum Religion {
    Buddhism, Judaism, Islam, Catholicism, Atheist
}

export enum Genre {
    Homme, Femme
}

export interface canDrink {
    drink(name: string, alcool: boolean, bio: boolean): void;
}


export class Personne implements canDrink {

    prenom: string;
    nom: string;
    genre: Genre;
    protected religion?: Religion;


    constructor(prenom: string, nom: string, genre: Genre, religion?: Religion) {
        this.prenom = prenom;
        this.nom = nom;
        this.genre = genre;
        this.religion = religion;
    }

    drink(name: string, alcool: boolean, bio: boolean) {
        if (alcool) {
            console.log(name + " Alcool");
        } else console.log(name + " Bio");

    }

    toString(): string {
        return this.prenom + " " + this.nom;
    }


}









