import { Stagiaire } from "./Stagiaire";
import { Formateur } from "./Formateur";

export class Formation {
    constructor(public nom: string, public dateDebut: string, public dateFin: string, public stagiaires: Stagiaire[],
                public formateurs: Formateur[]) {
    }
}
