import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryActivityDataService } from './services/in-memory-activity-data.service';

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
    HttpClientModule,
		AppRoutingModule,
		MatCardModule,
		BrowserAnimationsModule,
		MatIconModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryActivityDataService, { dataEncapsulation: false }
    )
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {
}
