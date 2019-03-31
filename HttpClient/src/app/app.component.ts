import {Component} from '@angular/core';
import {GithubApiService} from './services/github-api.service';
import {HeadersService} from './services/headers.service';
import {HttpErrorResponse, HttpResponse, HttpHandler, HttpClient, HttpRequest} from '@angular/common/http';
import {InterceptorService} from './services/interceptor.service';
import {ParamsService} from './services/params.service';
import {InterceptorErrorService} from './services/interceptor-error.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  results: Array<Object[]> = [];
  results2: Array<Object[]> = [];


  constructor(private git: GithubApiService,
              private gitH: HeadersService,
              private gitP: ParamsService,
              private gitI: InterceptorService,
              private gitIe: InterceptorErrorService
  ) {

  }

  gitUser() {
    this.git.getUser('fredericDuarte')
      .then(
        (res: any) => { // Success
          this.results = res;
          console.log('========= ' + this.results[0]);
        },
        msg => { // Error
          console.log('************ ' + msg);

        }
      );
  }

  param(): any {
    this.results2 = this.gitP.sampleParams();

  }


  header(): any {
    this.results2 = this.gitH.sampleHeader();
  }


}
