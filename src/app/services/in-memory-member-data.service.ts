import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Member } from "../models/member";
import {Activity} from "../models/activity";

@Injectable({
  providedIn: 'root'
})
export class InMemoryMemberDataService implements InMemoryDbService {
  createDb() {
    const activities: Activity[] = [];
    return {activities};
  }
}
