import { Formation } from "../model/Formation";
import FormationApi  from "./FormationApi";
import {Injectable} from '@angular/core';

@Injectable()
export default class FormationService {

constructor(private formationApi: FormationApi) {}

  getFormations(): Promise<Array<Formation>> {

   return this.formationApi.fetchFormation();
  }

}
