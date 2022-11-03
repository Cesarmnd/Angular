import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentService } from './services/student.service';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { ListComponent } from './components/list/list.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';


@NgModule({
  declarations: [
    ListComponent,
    UserRegistrationComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule,
    MaterialModule
  ],
  providers: [
    StudentService
  ]
})
export class StudentsModule { }
