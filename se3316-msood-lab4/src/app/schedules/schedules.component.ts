import { SchedulesService } from './../schedules.service';
import { Schedules } from './../Schedules';
import { SCHEDULES } from './../all-Schedules';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {
schedules: Schedules[];
selectedSchedule: Schedules;

  constructor(private scheduleService: SchedulesService) { }

  ngOnInit(): void {
    this.getSchedules();
  }

  getSchedules(): void {
    this.scheduleService.getSchedules().subscribe(schedules => this.schedules = schedules);
  }

  onSelect(schedule: Schedules) {
    this.selectedSchedule = schedule;
  }

}
