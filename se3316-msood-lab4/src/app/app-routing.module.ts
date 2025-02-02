import { EditScheduleComponent } from './edit-schedule/edit-schedule.component';
import { CreateSchedulesComponent } from './create-schedules/create-schedules.component';
import { ScheduleDetailComponent } from './schedule-detail/schedule-detail.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { CoursesComponent } from './courses/courses.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: 'schedules', component: SchedulesComponent },
  { path: 'schedule-detail/:name', component: ScheduleDetailComponent },
  {path:'createSchedule', component:CreateSchedulesComponent},
  {path:'editSchedule/:name', component: EditScheduleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
