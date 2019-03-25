/* ************************* Personne  *********************  */

enum Religion {
    Buddhism, Judaism, Islam, Catholicism, Atheist
}

enum Genre {
    Homme, Femme
}

interface canDrink {
    drink(name: string, alcool: boolean, bio: boolean): void;
}


class Personne implements canDrink {

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


/* ************************* formateur   *********************  */

class Connaissance {

    constructor(public nom: string, public nbExp: number) {

    }


}

interface hasSkills {
    skills: Array<Connaissance>;
}

interface canLearn {
    learn(): void;
}

class Formateur extends Personne implements canLearn {

    constructor(public prenom: string, public nom: string, public genre: Genre, public religion: Religion, private connaissances: Connaissance[]) {
        super(prenom, nom, genre, religion);

    }




    learn() {
      let liste = [];
        for(let i in this.connaissances) {

            if(this.connaissances[i].nbExp > 2){
                liste.push(this.connaissances[i].nom);
            }
        }

        return liste;
    }
}


/* ************************* stagiaire   *********************  */
class Certification {
    constructor(public nom: string, public annee: number) {
    }
}


class Stagiaire extends Personne {
    constructor(public prenom: string, public nom: string, public genre: Genre, public religion: Religion,
                public certifications: Certification[]
    ) {
        super(prenom, nom, genre, religion)
    };
}


class Formation {
    constructor(public nom: string, public dateDebut: string, public dateFin: string, public stagiaires: Stagiaire[],
                public formateurs: Formateur[]) {
    }
}


