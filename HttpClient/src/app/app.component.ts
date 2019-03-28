import { Component } from '@angular/core';
import { GithubApiService } from "./services/github-api.service";
import { HeadersService } from "./services/headers.service";
import { InterceptorService } from "./services/interceptor.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HttpClient';
  loading: boolean=false;
  errorMessage;


  constructor(private git : GithubApiService, private  gitH : HeadersService) {}

  gitUser() {

    this.loading=true;
    this.errorMessage="";

    this.git.getUser('fredericDuarte')
      .then((response)=> {

        console.log(response);
        //return response;

      })
      .then((error)=> {

        console.log(error);
       // return response;

      })

/*
    this.git.getUser('fredericDuarte')
      .then((result)=> {

        console.log(result);
        return result;

      })  */

  }

  header():any {
     return this.gitH.sampleHeader();
  }
  
}
