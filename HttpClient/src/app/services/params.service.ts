import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';


const API_BASE_URL: string = 'https://api.punkapi.com/v2/beers/';

@Injectable({
  providedIn: 'root'
})
export class ParamsService {
  results: Array<Object[]> = [];


  constructor(private http: HttpClient) {
  }

  sampleParams(): any {
    const params = new HttpParams()
      .set('login', '1');


   // this.http.get<any[]>(`https://api.punkapi.com/v2/beers/1`, {params})
  //  this.http.get<any[]>(`http://sample.com`, {params})
  //  this.http.get<any[]>(`http://sample.com`, {params})
    this.http.get<any[]>('https://httpclient-demo.firebaseio.com/appareils.json')
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
