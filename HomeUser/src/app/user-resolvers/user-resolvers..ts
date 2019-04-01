import {Component, Injectable, OnInit} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';


import {User} from '../Model/User';
import {UserServiceService} from '../service/user-service.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserResolvers implements Resolve<User> {


  constructor(private user: UserServiceService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.user.get(route.paramMap.get('idLogin'))
      .then(
        (res: any) => { // Success
          console.log(' // resolvers get idLogin// ' + route.paramMap.get('idLogin'));
          return res;
        },
        msg => { // Error
          console.log('************ ' + msg);

        }
      );
  }

  /*
    resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

      return [{
        login: 'fred',
        type: 'Dev',
        company: 'bethesdaa',
        bio: 'Dev since',
        location : 'France',
        avatar: 'fallout'

      }, {
        login: 'Joe',
        type: 'Dev',
        company: 'bethesdaa',
        bio: 'Dev since',
        location : 'France',
        avatar: 'fallout'
      }, {
        login: 'Adam',
        type: 'Dev',
        company: 'bethesdaa',
        bio: 'Dev since',
        location : 'France',
        avatar: 'fallout'
      }, {
        login: 'james',
        type: 'Dev',
        company: 'bethesdaa',
        bio: 'Dev since',
        location : 'France',
        avatar: 'fallout'
      }];
    }
    */
}
