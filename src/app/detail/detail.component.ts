import { Component, OnInit } from '@angular/core';
import {PATH_DETAIL, PATH_HOME} from "../app.routes.constantes";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute) {
  }


  idDetail = 2 ;

  navigateToHome() {
    this.router.navigate([PATH_HOME]);
  }




  ngOnInit() {

    console.log('///////// idDetail snapshot', this.route.snapshot.paramMap.get('idDetail'));

   this.route.paramMap.subscribe((params: ParamMap) => {
      console.log('============  isDetail', params.get('idDetail'));
    });

  }
}
