import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import{Schedules} from './Schedules'
import { SCHEDULES } from './all-Schedules';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SchedulesService {
  
  constructor() { }


    getSchedules(): Observable<Schedules[]>{
      return of(SCHEDULES);
    }

    getSchedule(name: string): Observable<Schedules> {
      return of(SCHEDULES.find(schedule => schedule.name === name));
    }

}
