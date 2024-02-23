import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-blog-layout',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  template: `
    <div class="container-fluid" style="position: relative;">
      <div class="row">
        <app-navbar></app-navbar>
      </div>
    </div>
  `,
  styleUrl: './blog-layout.component.scss',
})
export class BlogLayoutComponent {}
