class Genre {

    sexe: string;

    constructor(sexe: string) {
        this.sexe = sexe;
    }

}

enum Religion {
    Buddhism, Judaism, Islam, Catholicism, Atheist
}

interface canDrink {
    drink(name: string, alcool: boolean, bio: boolean): void;
}


class Personne implements canDrink {

    prenom: string;
    nom: string;
    genre: Genre[];
    private religion: Religion[];


    constructor(prenom: string, nom: string, genre: Genre[], religion: Religion[]) {
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


interface canLearn extends Connaissance {
    learn : Array<Connaissance>;
}

class Connaissance  {

    constructor(public nom: string, public nbExp: number) {

    }


}


class formateur extends Personne implements canLearn {

    connaissance: Connaissance[];


    constructor(prenom: string, nom: string, genre: Genre[], religion: Religion[], connaissance: Connaissance[]) {
        super(prenom, nom, genre, religion);
        this.connaissance = connaissance;
    }

    learn(connaissance: Connaissance[]);
}


