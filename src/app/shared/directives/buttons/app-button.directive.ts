import { Directive , HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appButton]',
  standalone: true
})
export class AppButtonDirective {

  constructor() { }

  @HostBinding('style.padding') padding = '10px 20px';
  @HostBinding('style.border') border = 'none';
  @HostBinding('style.background') background = 'linear-gradient(45deg, #2196F3, #00BCD4)';
  @HostBinding('style.color') color = 'white';
  @HostBinding('style.borderRadius') borderRadius ='15px';
  @HostBinding('style.fontFamily') fontFamily = 'Arial';
  @HostBinding('style.cursor') cursor = 'pointer';
  @HostBinding('style.boxShadow') boxShadow = '0 4px 8px rgba(0,0,0,0.2)';

  @HostListener('mouseenter') onMouseEnter() {
    this.background = 'linear-gradient(45deg, #1976D2, #0097A7)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.background = 'linear-gradient(45deg, #2196F3, #00BCD4)';
  }
}
