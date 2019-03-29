import { Component, OnInit } from '@angular/core';
import { Formation } from '../model/Formations'
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {


  formations  : Array<Formation> = [];



  constructor(private router: Router,private route: ActivatedRoute) {
  }



  ngOnInit() {
/*
    this.formations =  [
    new Formation('Module Angular','cours de 7 jours'),
    new Formation('Module JS','cours de 7 jours'),
    new Formation('Module Java','cours de 7 jours')
  ]; */

    this.route.data.subscribe(data => this.formations = data['formations']);

    this.router.events.subscribe((event) => {
      console.log('________EVENTS', event);
    })

  }

}
