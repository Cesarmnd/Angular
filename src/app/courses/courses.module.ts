import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { ChartComponent } from './components/chart/chart.component';
import { CourseRegistrationComponent } from './components/course-registration/course-registration.component';
import { CourseService } from './services/course.service';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';

@NgModule({
  declarations: [
    ChartComponent,
    CourseRegistrationComponent,
    EditCourseComponent,
    CourseDetailsComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    CoursesRoutingModule,
    MaterialModule
  ],
  providers: [
    CourseService
  ]
})

export class CoursesModule { }
