import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../Model/User';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  userList: Array<User> = [];
  userList2: Array<User> = [];
  user : User;

  constructor(private router: Router, private route: ActivatedRoute) {
  }


  ngOnInit() {

    this.route.data.subscribe(data => {
      console.log('xxxxxx', data);
       this.user = data['user'];
       this.userList = data['userList'];



    });
    //this.route.data.subscribe(data => his.user = data['user']);

    this.router.events.subscribe((event) => {
      console.log('________EVENTS', event);
    });
  }


  follower() {




  }


}
