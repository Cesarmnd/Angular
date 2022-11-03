import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './components/chart/chart.component';
import { CourseRegistrationComponent } from './components/course-registration/course-registration.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';

const routes: Routes = [
  { path: 'courses', children: [
    { path: 'list', component: ChartComponent },
    { path: 'create', component: CourseRegistrationComponent },
    { path: 'edit', component: EditCourseComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CoursesRoutingModule { }