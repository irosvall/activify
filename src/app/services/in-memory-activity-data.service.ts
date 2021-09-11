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
        title: "Mountain biking - beginner",
        summary: "Learn the basics of mountain biking by cycling though a moderately difficult terrain.",
        description: "We will gather at the eastern part of Hudiksvall where we will first go through the basics. When you feel ready we will begin the ride though a marked trail for beginners. ",
        extraInformation: "Bring your own helmet and plenty of water. And for an addition fee I'll lend you one of my bikes.",
        location: "Hudiksvall",
        duration: 300,
        photos: [
          "assets/activities/bike.jpg",
          "assets/activities/bike2.jpg",
          "assets/activities/forrest.jpg",
        ],
        host: {
          name: "John Doe",
          username: "user1",
          presentation: "I'm a happy guy who likes mountain biking. I'm passionate about sharing my passions.",
          profilePicture: "assets/faces/john.jpg",
        },
      },
      {
        id: 2,
        title: "Hiking to a waterfall",
        summary: "Travel the road with me to an amazing waterfall.",
        description: "The big waterfall of Ljusdal is a must see for everyone! The trail to the waterfall takes about 30 minutes. Going there you'll walk over wooden bridges and nature roads. It makes you feel close to the nature. Once we are there we'll eat some 'fika' and emjoy the waterfall for around 40 mins or whatever feels right in the moment. I have all the little facts about plants and animals in the area, and I can pinpoint bird species for the interested. The activity is suited for any age that are steady on the foot.",
        location: "Ljusdal",
        duration: 100,
        photos: [
          "assets/activities/waterfall.jpg",
          "assets/activities/forrest-track.jpg",
          "assets/activities/forrest2.jpg",
          "assets/activities/forrest.jpg",
        ],
        minimumPeople: 1,
        maximumPeople: 15,
        extraInformation: "Wear clothes suitable for the weather. Remember that the paths can be slippery, so a good pair of shoes can be handy.",
        host: {
          name: "Jane Doe",
          username: "user2",
          presentation: "I am a nature loving person. I know all about every bird species of Sweden and can happily talk about them all. Ljusdal is my hometown and I know much history about it. Don't hesitate to contact me for a tour!",
          profilePicture: "assets/faces/jane.jpg",
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
