import { Formation } from "../model/Formation";

export default class FormationApi {
  fetchFormation():Promise<Array<Formation>> {
    return new Promise((resolve)=> {
      setTimeout(()=> {
        resolve([
          new Formation('module JSP', "le super angular 6"),
          new Formation('module Spring', "JS  mouaiss"),
          new Formation('module Maven', "a améliorer")
        ])
      }, 2000);
    });
  }
}
