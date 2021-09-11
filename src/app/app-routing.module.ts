import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ActivityDetailsComponent} from "./components/activity/activity-details.component";
import { FrontPageComponent } from "./components/front-page/front-page.component";

const routes: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'activity/:id', component: ActivityDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
