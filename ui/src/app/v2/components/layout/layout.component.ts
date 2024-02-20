import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { MobileTopNavbarComponent } from '../mobile-top-navbar/mobile-top-navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    MobileTopNavbarComponent,
    RouterModule,
  ],
  template: `
    <div class="container-fluid">
      <div class="row">
        <app-mobile-top-navbar></app-mobile-top-navbar>
      </div>
      <div class="row">
        <div class="col-auto">
          <app-sidebar></app-sidebar>
        </div>
        <div class="col-auto">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
