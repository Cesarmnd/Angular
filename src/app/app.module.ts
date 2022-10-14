import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ContentComponent } from './components/content/content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './components/forms/forms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SamplesComponent } from './components/samples/samples.component';
import { MaterialModule } from './material.module';
import { TablaComponent } from './components/tabla/tabla.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ChartComponent } from './components/chart/chart.component';
import { ListComponent } from './components/list/list.component';
import { BooleanToTextPipe } from './pipes/boolean-to-text.pipe';
import { StudentStateDirective } from './directives/student-state.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    ContentComponent,
    FormsComponent,
    SamplesComponent,
    TablaComponent,
    DialogComponent,
    ChartComponent,
    ListComponent,
    BooleanToTextPipe,
    StudentStateDirective
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
