import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./core/components/home/home.component";
import { NotFoundComponent } from "./core/components/not-found/not-found.component";
import { AuthenticationGuard } from "./core/guards/authentication.guard";

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthenticationGuard] },

  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then( obj => obj.CoursesModule )
    , canActivate: [AuthenticationGuard]
  },

  {
    path: 'students',
    loadChildren: () => import('./students/students.module').then( obj => obj.StudentsModule )
    , canActivate: [AuthenticationGuard]
  },

  {
    path: 'authentication',
    loadChildren: () => import('./authentication/authentication.module').then( obj => obj.AuthenticationModule )
  },

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