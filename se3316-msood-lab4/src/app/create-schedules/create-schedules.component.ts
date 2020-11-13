import { SchedulesService } from './../schedules.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-schedules',
  templateUrl: './create-schedules.component.html',
  styleUrls: ['./create-schedules.component.css']
})
export class CreateSchedulesComponent implements OnInit {
  scheduleForm: FormGroup;
  scheduleCourses: any[] = [];

  constructor(private scheduleService: SchedulesService, private fb:FormBuilder, private route:ActivatedRoute) { }

  ngOnInit(): void {
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
    console.log(this.scheduleForm.value.subject_schedule);
    console.log(this.scheduleCourses);

    const newFormData = {scheduleName:this.scheduleForm.value.scheduleName, subject_schedule:this.scheduleCourses};

    this.scheduleService.addNewSchedule(newFormData).subscribe(data=>console.log(data));
    this.scheduleForm.reset();
  }

  removeCourseButtonClick(courseIndex:number): void{
    (<FormArray>this.scheduleForm.get('subject_schedule')).removeAt(courseIndex);
  }

}
