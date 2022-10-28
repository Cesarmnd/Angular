import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChartComponent } from "./components/chart/chart.component";
import { CourseRegistrationComponent } from "./components/course-registration/course-registration.component";
import { HomeComponent } from "./components/home/home.component";
import { ListComponent } from "./components/list/list.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { UserRegistrationComponent } from "./components/user-registration/user-registration.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'courses', children: [
    { path: 'list', component: ChartComponent },
    { path: 'create', component: CourseRegistrationComponent }
  ]},
  { path: 'students', children: [
    { path: 'list', component: ListComponent },
    { path: 'create', component: UserRegistrationComponent }
  ]},
  { path: '', redirectTo: 'home', pathMatch: 'full' },  
  { path: '**', component: NotFoundComponent }
]


@NgModule(
  {
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  }
)


export class AppRoutingModule {

}