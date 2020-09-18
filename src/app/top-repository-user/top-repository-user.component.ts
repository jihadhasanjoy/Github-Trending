import { Component, OnInit, OnDestroy } from '@angular/core';
import { GithubService } from '../shared/services/github.service';
import { IRepositoryContents, IItem } from '../shared/models/repositoryContent.model';
import { Subscription } from 'rxjs';
import { IPager } from '../shared/models/pager.model';
import { PagerService } from '../shared/services/pager.service';

@Component({
  selector: 'app-top-repository-user',
  templateUrl: './top-repository-user.component.html',
  styleUrls: ['./top-repository-user.component.scss']
})
export class TopRepositoryUserComponent implements OnInit, OnDestroy {
  topRepositoriesItem: IItem[];
  subscription: Subscription;
  isLoading = true;

  // pager object
  pager: IPager;

  // paged items
  pagedItems: IItem[];
  constructor(private githubService: GithubService, private pagerService: PagerService){}


  ngOnInit(): void {
    this.getData();
  }

  getData(): void{
    this.isLoading = true;

    this.subscription = this.githubService.getTopRepositories().subscribe((data) => {
      this.topRepositoriesItem = data;
      this.isLoading = false;
       // initialize to page 1
      this.setPage(1);
    },
    (error) => {
      console.log(error);
    });
  }

  setPage(page: number): void {

    // get pager object from service
    debugger;
    this.pager = this.pagerService.getPager(this.topRepositoriesItem.length, page);

    // this.pager = this.pagerService.getPager(500, page);

    debugger;
    // get current page of items
    this.pagedItems = this.topRepositoriesItem.slice(this.pager.startIndex, this.pager.endIndex + 1);
}

  ngOnDestroy(): void{
    // unsubcribe data
    this.subscription.unsubscribe();
  }
}
