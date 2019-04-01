import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

 const API_BASE_URL: string = 'https://api.github.com/users/';
 const FOLLOWERS_URL: string = '/followers';
 const REPOS_URL: string = '/repos'
//const API_BASE_URL: string = 'https://api.punkapi.com/v2/beers/';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) {
  }

  get(login: string) {
   return this.http.get(`${API_BASE_URL}${login}`).toPromise();
  }

  getFollowers(login: string) {
    return this.http.get(`${API_BASE_URL}${login}${FOLLOWERS_URL}`).toPromise();
  }
  getRepos(login: string) {
    return this.http.get(`${API_BASE_URL}${login}${REPOS_URL}`).toPromise();
  }


}
