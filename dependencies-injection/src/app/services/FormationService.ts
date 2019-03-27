import { Formation } from "../model/Formation";

export default class FormationService {

  getFormations(): Array<Formation> {

    return [
      new Formation('module JSP', "le super angular 6"),
      new Formation('module Spring', "JS  mouaiss"),
      new Formation('module Maven', "a améliorer")
    ]
  }

}
