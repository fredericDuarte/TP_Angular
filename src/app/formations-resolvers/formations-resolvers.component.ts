import {Component, Injectable, OnInit} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Formation} from "../model/Formations";


@Injectable()
export class FormationsResolversComponent implements Resolve<Formation[]> {

  constructor() {
  }


  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    return [{
      title: 'Module Angular',
      decription: '',
    }, {
      title: 'Module JavaScript',
      decription: '',
    }, {
      title: 'Module TypeScript',
      decription: '',
    }];
  }

}
