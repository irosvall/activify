import { Component, OnInit } from '@angular/core';
import { ActivityService } from "../../services/activity.service";
import { Activity } from "../../models/activity";

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activities: Activity[] = [];

  constructor(private readonly activityService: ActivityService) { }

  ngOnInit(): void {
    this.activityService
      .getActivities()
      .subscribe(activities => this.activities = activities);
  }

}
