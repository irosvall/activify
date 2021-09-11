import { Component, Input, OnInit } from '@angular/core';
import { Activity } from "../../models/activity";
import { Router } from "@angular/router";

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.css'],
})
export class ActivityCardComponent implements OnInit {

  @Input() activity: Activity | undefined;

  constructor(private readonly router: Router) {
  }

  ngOnInit(): void {
  }

  onClickedActivity() {
    // @ts-ignore
    this.router.navigate(["activity", this.activity?.id]);
  }
}
