import { Component, Input, OnInit } from '@angular/core';
import { Activity } from "../../models/activity";
import { Router } from "@angular/router";
import {FavoriteActivityService} from "../../services/favorite.service";

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.css'],
})
export class ActivityCardComponent implements OnInit {
  public isFavorite: boolean = false;

  @Input() activity: Activity | undefined;

  constructor(
    private readonly router: Router,
    private readonly favoriteActivityService: FavoriteActivityService,
  ) { }

  ngOnInit(): void {
    this.setIfActivityIsFavorite();
  }

  onClickedActivity() {
    // @ts-ignore
    this.router.navigate(["activity", this.activity?.id]);
  }

  toggleToFavorites() {
    if (this.activity !== undefined) {
      this.favoriteActivityService.toggleFavoriteActivity(this.activity);
      this.isFavorite = !this.isFavorite;
    }
  }

  private setIfActivityIsFavorite(): void {
    if (this.activity !== undefined) {
      this.isFavorite = this.favoriteActivityService.isFavorite(this.activity);
    }
  }
}
