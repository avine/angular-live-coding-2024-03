import { Directive } from '@angular/core';

@Directive({
  selector: '[appDemo]',
  exportAs: 'appDemo',
})
export class DemoDirective {
  foo = 1;
}
