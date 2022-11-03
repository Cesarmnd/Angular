import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BooleanToTextPipe } from './pipes/boolean-to-text.pipe';
import { StudentStateDirective } from './directives/student-state.directive';
import { CourseFilterPipe } from './pipes/course-filter.pipe';
import { TextSizeDirective } from './directives/text-size.directive';
import { config, token } from './config';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { CoursesModule } from './courses/courses.module';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './material.module';
import { StudentsModule } from './students/students.module';


@NgModule({
  declarations: [
    AppComponent,
    BooleanToTextPipe,
    StudentStateDirective,
    CourseFilterPipe,
    TextSizeDirective,
  ],
  imports: [
    CoreModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthenticationModule,
    CoursesModule,
    StudentsModule
  ],
  providers: [ 
    {provide: token, useValue: config}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
