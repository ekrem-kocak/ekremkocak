import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-cursor',
  template: `
    <div
      class="cursor"
      [ngStyle]="cursorStyle"
      [class.hovered]="isHovered"
    ></div>
  `,
  styleUrl: './cursor.component.scss',
})
export class CursorComponent {
  cursorStyle = {};
  isHovered: boolean = false;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.cursorStyle = {
      top: event.pageY - 13 + 'px',
      left: event.pageX - 13 + 'px',
    };
  }

  @HostListener('document:mouseover', ['$event'])
  onMouseEnter(event: MouseEvent) {
    let targetElement: HTMLElement | null = event.target as HTMLElement;
    while (targetElement) {
      console.log("ekrem");
      if (
        targetElement instanceof HTMLAnchorElement ||
        targetElement instanceof HTMLButtonElement
      ) {
        this.isHovered = true;
        return; // eğer bir <a> veya <button> bulduysak, döngüyü sonlandır
      }
      targetElement = targetElement.parentElement; // ebeveyn öğesine geç
    }
  }

  @HostListener('document:mouseout', ['$event'])
  onMouseLeave(event: MouseEvent) {
    this.isHovered = false;
  }
}
