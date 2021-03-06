import { EmailService } from './services/email.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageListComponent } from './page-list/page-list.component';
import { PageDetailsComponent } from './page-details/page-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PageListComponent,
    PageDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: PageListComponent },
      { path: 'details/:id', component: PageDetailsComponent }
    ]),
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
