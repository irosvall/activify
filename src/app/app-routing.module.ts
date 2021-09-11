import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ActivityDetailsComponent} from "./components/activity/activity-details.component";

const routes: Routes = [
  { path: 'activity/:id', component: ActivityDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
