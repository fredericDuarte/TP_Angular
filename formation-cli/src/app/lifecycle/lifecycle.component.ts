import { Component, OnInit } from '@angular/core';
import {Formation} from "../model/Formation";


const NOM_ANGULAR : string = 'Module Angular';
const NOM_JS : string = 'Module JavaScript';
const DESC : string =" les cours"

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {

  formation:Formation = new Formation(NOM_ANGULAR, DESC);
  constructor() { }
  ngOnInit() {
    setInterval(()=> {
      this.formation = new Formation(this.formation.nom === NOM_ANGULAR ? NOM_JS : NOM_ANGULAR, DESC);
    }, 1000)
  }
}
