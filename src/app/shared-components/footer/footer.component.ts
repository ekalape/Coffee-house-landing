import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


/* import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCardHover]'
})
export class CardHoverDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.scaleImage(1.2); // Scale factor for mouse enter
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.scaleImage(1); // Reset to original size on mouse leave
  }

  private scaleImage(scale: number) {
    const imageElement = this.el.nativeElement.querySelector('.card-image'); // Adjust the selector based on your HTML structure
    if (imageElement) {
      this.renderer.setStyle(imageElement, 'transform', `scale(${scale})`);
      this.renderer.setStyle(imageElement, 'transition', 'transform 0.3s ease'); // Add a smooth transition
    }
  }
}
 */