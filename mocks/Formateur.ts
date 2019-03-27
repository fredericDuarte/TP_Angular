
import { Personne, Religion, Genre} from "./Personne";

/* ************************* formateur   *********************  */

export class Connaissance {

    constructor(public nom: string, public nbExp: number) {

    }


}

interface hasSkills {
    skills: Array<Connaissance>;
}

interface canLearn {
    learn(): void;
}

export class Formateur extends Personne implements canLearn {

    constructor(public prenom: string, public nom: string, public genre: Genre, public religion: Religion, private connaissances: Connaissance[]) {
        super(prenom, nom, genre, religion);

    }


    learn() {
        let liste = [];
        for (let i in this.connaissances) {

            if (this.connaissances[i].nbExp > 2) {
                liste.push(this.connaissances[i].nom);
            }
        }

        return liste;
    }
}