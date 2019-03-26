import {Component, OnInit} from '@angular/core';
import { Formation } from '../model/Formation';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  isDisplay: boolean = true;
  isClick: boolean = true;
  isSapin(ev,lv):boolean {

    return ev ? ev : lv ? lv : false;
  }

  formation: Formation = new Formation('CNAM','C++ ');


  formations:Array<Formation> = [];

  eventClick(event) {
    this.isClick = !this.isClick;
    console.log("L'evento bouuton a été cliqué" , event  );
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
    setInterval(() => {
      this.isDisplay = !this.isDisplay;
    }, 1000);


    this.formations = [
      new Formation('Module Angular',"le super angular 6"),
      new Formation('Module JavaScript',"JS  mouaiss"),
      new Formation('Module TypeScript',"a améliorer"),
    ]
  }

}
