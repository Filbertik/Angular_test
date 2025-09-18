const DEFAULT_HIGHLIGHT_COLOR = 'yellow';

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() highliteColor: string = DEFAULT_HIGHLIGHT_COLOR;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highliteColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

// const DEFAULT_HIGHLIGHT_COLOR = 'yellow';

// import { Directive, ElementRef, HostListener, Input } from '@angular/core';

// @Directive({
//   selector: '[appHighlight]',
// })
// export class Highlight {
//   @Input() highliteColor: string = DEFAULT_HIGHLIGHT_COLOR;
//   constructor(private el: ElementRef) {}

//   @HostListener('mouseenter') onMouseEnter() {
//     this.highlight(this.highliteColor);
//   }
//   @HostListener('mouseleave') onMouseLeave() {
//     this.highlight(null);
//   }
//   private highlight(color: string | null) {
//     this.el.nativeElement.style.backgroundcolor = color;
//   }
// }
