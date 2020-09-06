import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IUserContents } from '../shared/models/userContent.model';
import { GithubService } from '../shared/services/github.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-top-country-user',
  templateUrl: './top-country-user.component.html',
  styleUrls: ['./top-country-user.component.scss']
})
export class TopCountryUserComponent implements OnInit, OnDestroy {
  selectList: string[] = ['Bangladesh', 'India', 'USA', 'Pakistan'];
  name = new FormControl('Bangladesh');
  user: IUserContents;
  subscription: Subscription;
  isLoading = true;
  error: any;
  constructor(private githubService: GithubService){}

  ngOnInit(): void {
    this.onSubmit();
  }

  onSubmit(): void{
    this.isLoading = true;
    this.subscription = this.githubService.getCountryTopUser(this.name.value).subscribe( (user) => {
      this.user = user;
      this.isLoading = false;
    },
    (error) => {
      this.isLoading = false;
      this.error = error;
      console.log(error);
    });
   }

   ngOnDestroy(): void{
      this.subscription.unsubscribe();
   }
}
