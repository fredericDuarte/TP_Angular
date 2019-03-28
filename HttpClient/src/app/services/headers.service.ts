import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeadersService {

  constructor(private http: HttpClient) { }
  sampleHeader() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    this.http.get(`http://sample.com`, { headers })
      .subscribe(
        data => console.log('success', data),
        error => console.log('oops', error)
      ),() => {
      console.log('=======there aer error');
     // fail("Do not fail")
    }, () => {
      console.log('======= So complete');
    };
  }
}
