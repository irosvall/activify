import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Activity } from "../models/activity";

@Injectable({
  providedIn: 'root',
})
export class InMemoryActivityDataService implements InMemoryDbService {
  createDb() {
    const activities: Activity[] = [
      {
        id: 1,
        title: "Mountain biking",
        description: "Take a rider in a nice valley.",
        location: "Hudiksvall",
        duration: 80,
        photos: [
          "assets/activities/bike.jpg",
        ],
        host: {
          name: "John Doe",
          username: "user1",
        }
      },
      {
        id: 2,
        title: "Hiking",
        description: "Travel the road with me to a waterfall.",
        location: "Ljusdal",
        duration: 100,
        photos: [
          "assets/activities/waterfall.jpg",
        ],
        host: {
          name: "Jane Doe",
          username: "user2",
        }
      },
    ];
    return { activities };
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
