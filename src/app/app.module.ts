import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { TopCountryUserComponent } from './top-country-user/top-country-user.component';
import { TopRepositoryUserComponent } from './top-repository-user/top-repository-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TopCountryUserComponent,
    TopRepositoryUserComponent,

    // UserContentViewComponent,
    // RepositoryContentViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // ModalModule,
    AppRoutingModule,
    SharedModule,
  ],
  exports: [
    // ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
