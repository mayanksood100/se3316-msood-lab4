import { CourseComponentFilterPipe } from './courses/courseComponent-filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubjectFilterPipe } from './courses/subject-filter.pipe';
import { CourseNumberFilterPipe } from './courses/courseNumber-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { SchedulesComponent } from './schedules/schedules.component';
import { ScheduleDetailComponent } from './schedule-detail/schedule-detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CreateSchedulesComponent } from './create-schedules/create-schedules.component';
import { EditScheduleComponent } from './edit-schedule/edit-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    DashboardComponent,
    SubjectFilterPipe,
    CourseNumberFilterPipe,
    CourseComponentFilterPipe,
    SchedulesComponent,
    ScheduleDetailComponent,
    CreateSchedulesComponent,
    EditScheduleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
