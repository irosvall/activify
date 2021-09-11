import { Component, OnInit } from '@angular/core';
import { Activity } from "../../models/activity";

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  public activity: Activity | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
