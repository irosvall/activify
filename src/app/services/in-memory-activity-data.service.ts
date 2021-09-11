import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Activity } from "../models/activity";

@Injectable({
  providedIn: 'root'
})
export class InMemoryActivityDataService implements InMemoryDbService {
  createDb() {
    const activities: Activity[] = [

    ];
    return {activities};
  }

  // Overrides the genId method to ensure that a activity always has an id.
  // If the activities array is empty,
  // the method below returns the initial number (11).
  // if the activities array is not empty, the method below returns the highest
  // activity id + 1.
  genId(activities: Activity[]): number {
    return activities.length > 0 ? Math.max(...activities.map(activity => activity.id)) + 1 : 11;
  }
}
