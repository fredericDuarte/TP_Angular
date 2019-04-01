import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PATH_PAGE} from '../app.routes.constantes';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  idLogin: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {

   /* this.router.events.subscribe((event) => {
      console.log('________EVENTS', event);
    });*/
  }

  handleChange(event)
  {
    this.idLogin = event.target.value;
  }

  navigateToPage() {
    console.log(" get event idlogin " + this.idLogin)
    this.router.navigate([PATH_PAGE, this.idLogin]);

  }

}
