import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb(){
    let schedules = [
    {"name" :"Mayank", "schedule_courses":[{"subject":"SE", "courseCode":"3316A"}]},
    {"name" :"Test", "schedule_courses":[{"subject":"STATS", "courseCode":"2037A"}]}
    ];

    return {schedules};
  }
  constructor() { }
}
