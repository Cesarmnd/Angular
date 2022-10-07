import { Component, Input, ViewChild } from '@angular/core';  
import { ContentComponent } from './components/content/content.component';
import { Student } from './models/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Title Test';
  @ViewChild(ContentComponent) componenteHijo!: ContentComponent;
  mensajeSalida: string = '';



  newListMain: any[] = [    
    {name:'cesar', lastname: 'figueras', email: 'vefidaucekau-4691@yopmail.com',age:26, grade: 7},
    {name:'rebecca', lastname: 'sevillano', email: 'kauxappammoijoi-7872@yopmail.com',age:27, grade: 16},
    {name:'gustavo', lastname: 'climent', email: 'zisagrequoda-7553@yopmail.com',age:24, grade: 2},
    {name:'esteban', lastname: 'peralta', email: 'feumuttejette-6309@yopmail.com',age:22, grade: 15}
  ]

  functionTest() {
    console.log('Red!');
  }

  manejarEventoSalida(mensaje: string) {
    this.mensajeSalida = mensaje;
  }

  agregarUsuario(user: Student) {
    this.newListMain.push(user)
  }
  constructor () {
    this.title = 'Este no es un titulo'
  }
}
