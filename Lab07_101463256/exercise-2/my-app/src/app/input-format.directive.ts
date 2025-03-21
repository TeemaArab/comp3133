import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[customInputFormat]'
})
export class InputFormatDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('blur') onBlur() {
    const currentValue = this.el.nativeElement.value.toUpperCase();
    this.renderer.setProperty(this.el.nativeElement, 'value', currentValue);
  }
}
