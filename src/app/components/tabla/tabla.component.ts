import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/models/curso';
import { MatDialog } from '@angular/material/dialog'
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  cursos: Curso[] = [
    { nombre: 'Angular', comision: '320', profesor: 'Pepe'},
    { nombre: 'HTML', comision: '320', profesor: 'Antonio'},
    { nombre: 'ReactJs', comision: '320', profesor: 'Ruben'},
    { nombre: 'Javascript', comision: '320', profesor: 'Carla'}
  ];

  columnas: string[] = ['nombre', 'comision', 'profesor', 'acciones'];
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>(this.cursos)


  constructor( private dialog: MatDialog ) {
    
   }

  ngOnInit(): void {
  }

  filter (event: Event) {
    const getData = (event.target as HTMLInputElement).value;
    this.dataSource.filter = getData.trim().toLocaleLowerCase();
  }

  edit () {
    this.dialog.open(DialogComponent, {
      width: '350px'
    })
  }
}
