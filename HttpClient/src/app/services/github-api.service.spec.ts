import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { GithubApiService } from './github-api.service';

describe('GithubApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubApiService = TestBed.get(GithubApiService);
    expect(service).toBeTruthy();

    service.getUser('fredericDuarte')
      .subscribe((result:any) => {
        console.log('next');
        expect(result.login).toBe('fredericDuarte')
      }, () => {
        console.log('error');
        fail("Do not fail")
      }, () => {
        console.log('complete');
      });
  });
});




