import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <app-cursor></app-cursor>
  `,
})
export class AppComponent {}
