import { Component, OnInit } from '@angular/core';
import {Formation} from "../model/Formation2";

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  formations:Array<Formation> = [];

  handleFormationSelected(formation) {
    console.log('Formation selected', formation);
  }

  constructor() { }

  ngOnInit() {


    this.formations = [
      new Formation('module Angular', "le super angular 6", 150, "November 14, 2019", "November 30, 2019'"),
      new Formation('module JavaScript', "JS  mouaiss", 350, "April 14, 2019", "May 30, 2019'"),
      new Formation('module TypeScript', "a améliorer", 250, "June 14, 2019", "July 30, 2019'"),
    ]
  }

}
