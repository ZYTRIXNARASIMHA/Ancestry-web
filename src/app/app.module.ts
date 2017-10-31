import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { FeedbackAddComponent } from './feedback-add/feedback-add.component';
import { SDKBrowserModule } from './sdk/index';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    SidebarComponent,
    HeaderComponent,
    ReviewsComponent,
    FeedbackAddComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    SDKBrowserModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: FeedbackComponent},
      {path:'feedback',component: FeedbackComponent },
      {path:'feedback-add',component: FeedbackAddComponent },
      {path:'reviews',component: ReviewsComponent }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
