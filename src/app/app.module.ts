import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivityCardComponent } from './components/activity-card/activity-card.component';
import { MatCardModule } from "@angular/material/card";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import { ActivityComponent } from './components/activity/activity.component';

@NgModule({
	declarations: [
		AppComponent,
		ActivityCardComponent,
  ActivityComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MatCardModule,
		BrowserAnimationsModule,
		MatIconModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {
}
