import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


// const API_BASE_URL: string = 'https://api.github.com/';
const API_BASE_URL: string = 'https://api.punkapi.com/v2/beers/';


const API_USERS: string = 'users/';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {


  constructor(private http: HttpClient) {
  }

  getUser(login: string) {


   // return this.http.get(`${API_BASE_URL}${API_USERS}${login}`).toPromise();
    return this.http.get(`${API_BASE_URL}}`).toPromise();

  }

}
