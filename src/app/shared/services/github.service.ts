import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration.service';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retryWhen, delay, timeout, map } from 'rxjs/operators';
import { IUserContents } from '../models/userContent.model';
import { IRepositoryContents, IItem } from '../models/repositoryContent.model';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private identityUrl = '';
  constructor( private configurationService: ConfigurationService, private http: HttpClient) {
    if (this.configurationService.isReady) {
      this.identityUrl = this.configurationService.serverSettings.identityUrl;

  } else {
      this.configurationService.settingsLoaded$.subscribe((x) => this.identityUrl = this.configurationService.serverSettings.identityUrl);
  }
  }

  getUserContentByName(name: string): Observable<IUserContents> {
    // debugger;
    return this.http.get<IUserContents>(`${this.identityUrl}search/users?q=${name}`)
        .pipe(
            retryWhen((error) => error.pipe(delay(500))),
            timeout(5000),
            catchError((e) => throwError(e))
        );
  }

  getUserContentByRepositories(name: string): Observable<IRepositoryContents>{
    return this.http.get<IRepositoryContents>(`${this.identityUrl}search/repositories?q=${name}`)
        .pipe(
            retryWhen((error) => error.pipe(delay(500))),
            timeout(5000),
            catchError((e) => throwError(e))
        );
  }

  getCountryTopUser(name: string): Observable<IUserContents>{
    // debugger;
    return this.http.get<IUserContents>(`${this.identityUrl}search/users?q=location:${name}+followers:>1000`)
        .pipe(
            retryWhen((error) => error.pipe(delay(500))),
            timeout(5000),
            catchError((e) => throwError(e))
        );
  }

  getTopRepositories(): Observable<IItem[]>{
    return this.http.get<IRepositoryContents>(`${this.identityUrl}search/repositories?q=stars:>1000`)
        .pipe(
            retryWhen((error) => error.pipe(delay(500))),
            timeout(5000),
            map((repositoryContent) => repositoryContent.items),
            catchError((e) => throwError(e))
        );
  }

}
