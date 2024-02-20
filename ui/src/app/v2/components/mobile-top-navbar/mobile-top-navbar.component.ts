import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { MobileNavState } from '../../states/mobile-nav.state';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ToggleSidebar } from '../../actions/mobile-nav.actions';

@Component({
  selector: 'app-mobile-top-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mobile-nav-header">
      <h6>Ekrem Koçak</h6>
      <button class="btn" (click)="toggle()">
        <i
          [class]="(visibility$ | async) ? 'fa-solid fa-x' : 'fa-solid fa-bars'"
          class=""
        ></i>
      </button>
    </div>
  `,
  styleUrl: './mobile-top-navbar.component.scss',
})
export class MobileTopNavbarComponent {
  @Select(MobileNavState.getVisibility) visibility$:
    | Observable<boolean>
    | undefined;

  constructor(private store: Store) {}
  toggle() {
    this.store.dispatch(new ToggleSidebar());
  }
}
