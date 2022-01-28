import { Personne } from "./personne";

export class Candidat extends Personne{
    lettreMotivation?:File;
    cV?:File;
    posteConvoite?:string;

}
