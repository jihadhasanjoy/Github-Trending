import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TopRepositoryUserComponent } from './top-repository-user/top-repository-user.component';
import { TopCountryUserComponent } from './top-country-user/top-country-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'top-country-user', component: TopCountryUserComponent },
  { path: 'top-repository-user', component: TopRepositoryUserComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
