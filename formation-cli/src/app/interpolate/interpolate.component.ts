import { Component, OnInit } from '@angular/core';
import { Formation } from '../model/Formation';


@Component({
  selector: 'app-interpolate',
  templateUrl: './interpolate.component.html',
  styleUrls: ['./interpolate.component.css']
})
export class InterpolateComponent implements OnInit {

  prenom:string='Joe'
  nom:string='summer'


  formation: Formation = new Formation('Diginamic','JavaEE fullStack');

  formationJS:Formation;

  getFullName():string {

   return `${this.nom} + ${this.prenom}`

  }

  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.formationJS= new Formation('Module JavaScript',"FullJS");
    }, 3000)
  }

}
