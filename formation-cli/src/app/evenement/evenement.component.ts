import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {

  isHidden:boolean= true;

  handleClick() {
    console.log("le boutona a été cliqué");
  }

  mouseClick(event,nom:string) {
    console.log("le mouvement mouse" + event.type , event  );
  }

  eventClick(event) {
   //this.isHidden?true:false;
   this.isHidden=!this.isHidden;

    console.log("L'event bouuton a été cliqué"+ this.isHidden , event  );
  }

  constructor() {
  }

  ngOnInit() {
  }

}
