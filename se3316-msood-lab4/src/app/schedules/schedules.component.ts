import { SchedulesService } from './../schedules.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {
  schedules:any[] = [];
  schedules_fixed:any[] = [];
  
  constructor(private scheduleService: SchedulesService, private router:Router) { }

  ngOnInit(): void {
    this.getAllSchedules();
  }

  getAllSchedules(){
    this.scheduleService.getAllSchedules().subscribe(scheds => {
      this.schedules = scheds;
    
      const combineItem = (arr, result = []) => {
        if(arr.length===0) {return result}
        result.push(arr.slice(0, 2).join(' '));
        return combineItem(arr.slice(2), result);
        }
        this.schedules_fixed = this.schedules.map((x) => ({
          ...x,
          subject_schedule: combineItem(x.subject_schedule),
        }));
        
    });
  }

  editButtonClick(scheduleName:string){
    this.router.navigate(['/editSchedule', scheduleName, ])
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
