import { Component, OnInit } from '@angular/core';
import { ActivityService } from "../../services/activity.service";
import { Activity } from "../../models/activity";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css'],
})
export class ActivityListComponent implements OnInit {

  activities: Activity[] = [];
  town: string | null | undefined;

  constructor(
    private readonly activityService: ActivityService,
    private readonly route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.town = this.route.snapshot.paramMap.get("town");

    if (this.town) {
      this.activityService
        .getActivities()
        // @ts-ignore
        .pipe(
          map(activities => activities
            .filter(activity => activity.location.toLowerCase() === this.town?.toLowerCase())),
        )
        .subscribe(activities => this.activities = activities);
    } else {
      this.activityService
        .getActivities()
        .subscribe(activities => this.activities = activities);
    }
  }

}
