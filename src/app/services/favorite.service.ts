import { Injectable } from '@angular/core';
import {Activity} from "../models/activity";

@Injectable({
  providedIn: 'root'
})
export class FavoriteActivityService {
  private favoriteActivities: Activity[] = [];

  getFavoriteActivities(): Activity[] {
    return this.favoriteActivities;
  }

  getFavoriteActivityIndex(activity: Activity): number {
    return this.favoriteActivities
      .findIndex(favoriteActivity => favoriteActivity.id === activity.id)
  }

  isFavorite(activity: Activity): boolean {
    return undefined !== this.favoriteActivities
      .find(favoriteActivity => favoriteActivity.id === activity.id)
  }

  toggleFavoriteActivity(activity: Activity): void {
    const isFavorite = this.isFavorite(activity);
    if (!isFavorite) {
      this.favoriteActivities.push(activity);
    } else {
      this.favoriteActivities.splice(this.getFavoriteActivityIndex(activity), 1);
    }
  }
}
