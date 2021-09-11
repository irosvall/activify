import { Component, OnInit } from '@angular/core';
import { FavoriteActivityService } from "../../services/favorite.service";
import { Activity } from "../../models/activity";

@Component({
  selector: 'app-favorite-activities',
  templateUrl: './favorite-activities.component.html',
  styleUrls: ['./favorite-activities.component.css']
})
export class FavoriteActivitiesComponent implements OnInit {
  favoriteActivities: Activity[] | undefined;

  constructor(
    private readonly favoriteActivityService: FavoriteActivityService,
  ) { }

  ngOnInit(): void {
    this.getFavoriteActivities();
  }

  getFavoriteActivities(): void {
    this.favoriteActivities = this.favoriteActivityService.getFavoriteActivities();
  }
}
