import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]',
})
export class IfDirective {
  @Input() appIf = true;

  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainerRef: ViewContainerRef,
  ) {
    viewContainerRef.createEmbeddedView(templateRef, { $implicit: 'IMPLICIT A', data: 1 });
    viewContainerRef.createEmbeddedView(templateRef, { $implicit: 'IMPLICIT B', data: 2 });
  }
}
