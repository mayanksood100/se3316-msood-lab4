import { Schedule } from './schedule';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchedulesService {
  private SERVER_URL = environment.SERVER_URL;
  constructor(private http: HttpClient) { }

  getAllSchedules(){
    return this.http.get<Schedule[]>(this.SERVER_URL + '/schedule');
  }

  deleteSchedule(name:string){
    const url = `${this.SERVER_URL}/schedule/${name}`
    return this.http.delete<Schedule>(url);
  }

  deleteAllSchedules(){
    return this.http.delete<Schedule[]>(this.SERVER_URL + '/schedule');
  }

}
