import { SchedulesService } from './../schedules.service';
import { Schedules } from './../Schedules';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.component.html',
  styleUrls: ['./schedule-detail.component.css']
})
export class ScheduleDetailComponent implements OnInit {
   schedule: Schedules;

  constructor( 
    private route: ActivatedRoute,
    private scheduleService: SchedulesService,
    private location: Location,
    ) { }

    ngOnInit(): void {
      this.getSchedule();
    }

    getSchedule(): void {
      const name = this.route.snapshot.paramMap.get('name');
      this.scheduleService.getSchedule(name)
        .subscribe(schedule => this.schedule = schedule);
    }

    goBack(): void {
      this.location.back();
    }

}
