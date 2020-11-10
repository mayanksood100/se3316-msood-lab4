import { SchedulesService } from './../schedules.service';
import { Component, OnInit } from '@angular/core';
import { Schedule } from '../schedule';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';
import {FormGroup, FormControl, FormBuilder, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {
  schedules:any[] = [];
  schedules_fixed:any[] = [];
  scheduleForm: FormGroup;
  scheduleCourses: any[] = [];

  constructor(private scheduleService: SchedulesService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getAllSchedules();
    this.scheduleForm = this.fb.group({
      scheduleName: ['', Validators.required],
      subject_schedule: this.fb.array([this.addCoursesFormGroup()])
    })
  }

  addCoursesFormGroup(): FormGroup {
    return this.fb.group({
      subject: [''],
      courseCode: ['']
    });
  }

  addAnotherCourse(): void {
    (<FormArray>this.scheduleForm.get('subject_schedule')).push(this.addCoursesFormGroup())
    console.log(this.scheduleForm.value);
  }

  submitSchedule(): void {
    console.log(this.scheduleForm.value.subject_schedule);
    this.scheduleCourses = this.scheduleForm.value.subject_schedule.flatMap((item)=>Object.values(item));
    console.log(this.scheduleCourses);

    const newFormData = {scheduleName:this.scheduleForm.value.scheduleName, subject_schedule:this.scheduleCourses};

    this.scheduleService.addNewSchedule(newFormData).subscribe(data=>console.log(data));
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
