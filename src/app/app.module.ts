import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ContentComponent } from './components/content/content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ChartComponent } from './components/chart/chart.component';
import { ListComponent } from './components/list/list.component';
import { BooleanToTextPipe } from './pipes/boolean-to-text.pipe';
import { StudentStateDirective } from './directives/student-state.directive';
import { CourseFilterPipe } from './pipes/course-filter.pipe';
import { TextSizeDirective } from './directives/text-size.directive';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { CourseRegistrationComponent } from './components/course-registration/course-registration.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    ContentComponent,
    ChartComponent,
    ListComponent,
    BooleanToTextPipe,
    StudentStateDirective,
    CourseFilterPipe,
    TextSizeDirective,
    UserRegistrationComponent,
    CourseRegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
