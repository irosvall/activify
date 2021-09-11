import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Activity } from "../../models/activity";
import { ActivityService } from "../../services/activity.service";
import {FavoriteActivityService} from "../../services/favorite.service";


@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css']
})
export class ActivityDetailsComponent implements OnInit {
  public activity: Activity | undefined;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly activityService: ActivityService,
    private readonly favoriteActivityService: FavoriteActivityService,
  ) { }

  ngOnInit(): void {
    this.getActivity();
  }

  getActivity(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);

    this.activityService.getActivity(id)
      .subscribe(activity => this.activity = activity);
  }

  addToFavorites(): void {
    if (this.activity !== undefined) {
      this.favoriteActivityService.toggleFavoriteActivity(this.activity);
    }
  }
}
