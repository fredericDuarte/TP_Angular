import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeadersService {


  results: Array<Object[]> = [];

  constructor(private http: HttpClient) {
  }

  sampleHeader(): any {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');


    this.http.get<any>(`http://sample.com`, {headers})
      .subscribe(
        (response) => {
          this.results = response;
          // console.log('========= ' + this.results[0].name);

        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
    return this.results;
  }
}
