import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.css']
})
export class SamplesComponent implements OnInit {
  cursos: Curso[] = [
    { nombre: 'Angular', comision: '320', profesor: 'Pepe'},
    { nombre: 'HTML', comision: '320', profesor: 'Antonio'},
    { nombre: 'ReactJs', comision: '320', profesor: 'Ruben'},
    { nombre: 'Javascript', comision: '320', profesor: 'Carla'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

  evento() {
    alert('nice')
  }
}
