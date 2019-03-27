import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Formation} from "../model/Formation2";

@Component({
  selector: 'app-formation-item',
  templateUrl: './formation-item.component.html',
  styleUrls: ['./formation-item.component.css']
})
export class FormationItemComponent implements OnInit {

  isSapin(ev,lv):boolean {

    return ev ? ev : lv ? lv : false;
  }

  @Input()
  formation: Formation = new Formation('module Angular', "le super angular 6", 150, "November 14, 2019", "November 30, 2019'");

  @Output()
  formationSelected:EventEmitter<Formation> = new EventEmitter<Formation>();


  selectFormation() {
    this.formationSelected.emit(this.formation);
  }


  constructor() {
  }

  getColorByElement(isFirst:boolean = false, isLast:boolean = false) {

    return  isFirst ? 'red' : isLast ? 'green' : 'black';

  }


  getColorByBack(isPair:boolean = false) {
    return isPair ? 'gray' : 'white';
  }



  ngOnInit() {


  }

}
