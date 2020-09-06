import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GithubService } from '../shared/services/github.service';
import { IUserContents } from '../shared/models/userContent.model';
import { throwError, Subscription } from 'rxjs';
import { IRepositoryContents } from '../shared/models/repositoryContent.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {
  name = new FormControl('');
  isDispalyData = false;
  isShowByName = true;
  userContentData: IUserContents;
  repositoryContentData: IRepositoryContents;
  isDisabled = false;

  subscriptions: Subscription[] = [];

  constructor(private gitHubService: GithubService) { }

  // tslint:disable-next-line: typedef
  searchByName(){

    // empty name not allowed
    if (this.name.value === '') { return; }

    // button disable true
    this.isDisabled = true;

    this.subscriptions.push(

      // get user content by name
      this.gitHubService.getUserContentByName(this.name.value).subscribe(
        (name: IUserContents) => {
          this.userContentData = name;
          this.isDispalyData = true;
        },
        (error) => {
          console.log(error);
        }),

         // get user content by repositories
        this.gitHubService.getUserContentByRepositories(this.name.value).subscribe((rep: IRepositoryContents) => {
          this.repositoryContentData = rep;
          this.isDisabled = false;
        },
        (error) => {
          console.log(error);
        })

    );

  }

  showByName(): void{
    this.isShowByName = true;
  }

  showByRepositories(): void{
    this.isShowByName = false;
  }

  ngOnDestroy(): void{
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

}
