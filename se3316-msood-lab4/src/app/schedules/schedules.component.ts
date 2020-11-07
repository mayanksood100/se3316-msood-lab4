import { SchedulesService } from './../schedules.service';
import { Component, OnInit } from '@angular/core';
import { Schedule } from '../schedule';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {
  schedules:Schedule[] = [];

  constructor(private scheduleService: SchedulesService) { }

  ngOnInit(): void {
    this.getAllSchedules();
  }

  getAllSchedules(){
    this.scheduleService.getAllSchedules().subscribe(scheds => {
      this.schedules = scheds;
      console.log(scheds);
      console.log(this.schedules);
    });
  }

  deleteSchedule(name:string): void {
    console.log(name);
    this.scheduleService.deleteSchedule(name).subscribe(data => {
    this.getAllSchedules();
    });

  }

  deleteAll(): void {
   this.scheduleService.deleteAllSchedules().subscribe(data=>this.getAllSchedules());
  }
  


}
