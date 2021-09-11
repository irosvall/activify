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
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { ActivityDetailsComponent } from './components/activity/activity-details.component';
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDividerModule } from "@angular/material/divider";
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FavoriteActivitiesComponent } from './components/favorite-activities/favorite-activities.component';

@NgModule({
	declarations: [
		AppComponent,
		ActivityCardComponent,
    ActivityDetailsComponent,
    ActivityListComponent,
    HeaderBarComponent,
    FrontPageComponent,
    FavoriteActivitiesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    IvyCarouselModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryActivityDataService, { dataEncapsulation: false },
    ),
    MatDividerModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {
}
