import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input({ alias: 'appHighlight' }) highlightColor = 'yellow';

  @Output() highlightEvent = new EventEmitter();

  @HostBinding('style.backgroundColor') bgColor = 'white';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @HostListener('click', ['$event']) onClick(event: Event) {
    this.bgColor = this.bgColor === 'white' ? this.highlightColor : 'white';
  }

  constructor(
    public elementRef: ElementRef<HTMLElement>,
    private renderer: Renderer2,
  ) {
    //elementRef.nativeElement.style.backgroundColor = 'yellow';
    // renderer.setStyle(elementRef.nativeElement, 'backgroundColor', 'yellow');
  }
}
