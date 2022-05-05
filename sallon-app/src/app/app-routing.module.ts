import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RatingComponent } from './rating/rating.component';
import { SearchComponent } from './search/search.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes:Routes=[
  {path:'login', component:LoginComponent},
  {path:'rating', component:RatingComponent},
  {path:'search', component:SearchComponent},
  {path:'feedback',component:FeedbackComponent},
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
 
export const routingComponents=[LoginComponent,RatingComponent,SearchComponent,FeedbackComponent]
