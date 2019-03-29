import { Component, OnInit } from '@angular/core';
import {Connaissance} from "../model/Connaissance";

@Component({
  selector: 'app-connaissances',
  templateUrl: './connaissances.component.html',
  styleUrls: ['./connaissances.component.css']
})
export class ConnaissancesComponent implements OnInit {

  connaissances : Array<Connaissance> = [];
  constructor() { }

  idSkill= 1;

  toList() {

    return this.connaissances;
  }

  ngOnInit() {

    this.connaissances=  [
      new Connaissance('Angular','Informatique'),
      new Connaissance('C02','Chimie'),
      new Connaissance('Maths générale','mathématique')

    ]

  }
}
