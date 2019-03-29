import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PATH_HOME, PATH_DETAIL} from '../app.routes.constantes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  idDetail = 1 ;

  constructor(private router: Router,private route: ActivatedRoute) {
  }


  navigateToDetail() {
    this.router.navigate([PATH_DETAIL, this.idDetail]);
  }

  ngOnInit() {

  }
}
