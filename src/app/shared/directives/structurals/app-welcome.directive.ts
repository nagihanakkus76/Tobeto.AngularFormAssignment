import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appWelcome]',
  standalone: true
})
export class AppWelcomeDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input() set appWelcome(delay: number) {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef);

    setTimeout(() => {
      this.viewContainer.clear();
    }, delay);
  }
}
