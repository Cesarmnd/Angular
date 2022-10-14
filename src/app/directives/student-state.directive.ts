import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStudentState]'
})
export class StudentStateDirective implements OnInit{
  @Input('appStudentState') aproved!: boolean;


  constructor( private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement,'color', this.aproved ? '#0f0' : '#f00');
    this.renderer.

  }

}
