import { Component } from '@angular/core';
import { GithubApiService } from "./services/github-api.service";
import { HeadersService } from "./services/headers.service";
import {HttpErrorResponse, HttpResponse, HttpHandler, HttpClient, HttpRequest} from "@angular/common/http";
import { InterceptorService } from "./services/interceptor.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'HttpClient';
  loading: boolean=false;
  errorMessage;
  results:Object[];


  constructor(private git : GithubApiService, private  gitH : HeadersService) {

    this.results = [];
  }

  gitUser() {

    this.loading=true;
    this.errorMessage="";
/*
    this.git.getUser('fredericDuarte')
      .then((response)=> {

        console.log(response);
        //return response;

      })
      .then((error)=> {

        console.log(error);
       // return response;

      }) */

    let promise = new Promise((resolve, reject) => {

      this.git.getUser('fredericDuarte')
        .then(
          (res: HttpResponse<Object>) => { // Success
            this.errorMessage = res.body;
            console.log("========= " + this.errorMessage)
            resolve();
          },
          msg => { // Error
            console.log("************ " + msg)
            reject(msg);
          }
        );
    });
    return promise;
  }

/*
    this.git.getUser('fredericDuarte')
      .then((result)=> {

        console.log(result);
        return result;

      })  */



  header():any {
     return this.gitH.sampleHeader();
  }

}
