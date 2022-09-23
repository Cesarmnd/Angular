import { Component } from '@angular/core';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Title Test';

  constructor () {
    this.title = 'Este no es un titulo'
  }
}
