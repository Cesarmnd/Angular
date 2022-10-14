import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTextSize]'
})
export class TextSizeDirective implements OnInit {
  @Input('appTextSize') size!: string;

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    this.elRef.nativeElement.style.fontSize = this.size;
  }
}
