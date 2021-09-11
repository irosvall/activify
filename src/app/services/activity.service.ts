import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Activity} from "../models/activity";

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private activitiesUrl = 'api/activities';

  constructor(
    private http: HttpClient,
  ) { }

  getActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.activitiesUrl)
  }

  getActivity(id: number): Observable<Activity> {
    return this.http.get<Activity>(`${this.activitiesUrl}/${id}`)
    }
}
