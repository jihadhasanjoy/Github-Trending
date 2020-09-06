import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConfigurationService } from './services/configuration.service';
import { PipeModule } from './pipe/pipe.module';
import { GithubService } from './services/github.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalService } from './services/modal.service';
import { PagerService } from './services/pager.service';
import { UserContentViewComponent } from './component/user-content-view/user-content-view.component';
import { RepositoryContentViewComponent } from './component/repository-content-view/repository-content-view.component';
import { ModalComponent } from './component/modal/modal.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    // PipeModule
    PipeModule,
  ],
  declarations: [
   // UppercasePipe,

  // shareComponet
  ModalComponent,
  UserContentViewComponent,
  RepositoryContentViewComponent,

],

  exports: [
    CommonModule,
    RouterModule,

    // pipe
    PipeModule,

    // shareCompoent
    ModalComponent,
    UserContentViewComponent,
    RepositoryContentViewComponent,

  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
      return {
          ngModule: SharedModule,
          providers: [
              // Providers
              ConfigurationService,
              GithubService,
              ModalService,
              PagerService
          ]
      };
  }
}
