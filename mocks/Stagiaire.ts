import { Personne, Religion, Genre} from "./Personne";



/* ************************* stagiaire   *********************  */
export class Certification {
    constructor(public nom: string, public annee: number) {
    }
}


export class Stagiaire extends Personne {
    constructor(public prenom: string, public nom: string, public genre: Genre, public religion: Religion,
                public certifications: Certification[]
    ) {
        super(prenom, nom, genre, religion)
    };
}




