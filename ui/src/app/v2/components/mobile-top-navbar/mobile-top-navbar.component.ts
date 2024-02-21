import { Component, OnDestroy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { MobileNavState } from '../../states/mobile-nav.state';
import { Observable, Subject, filter, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ToggleSidebar } from '../../actions/mobile-nav.actions';
import { NavigationEnd, Router } from '@angular/router';

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
export class MobileTopNavbarComponent implements OnDestroy {
  @Select(MobileNavState.getVisibility) visibility$:
    | Observable<boolean>
    | undefined;

  $destroy = new Subject<void>();

  constructor(private store: Store, private router: Router) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.$destroy)
      )
      .subscribe({
        next: (e) => {
          const visibility = this.store.selectSnapshot(
            MobileNavState.getVisibility
          );
          visibility && this.store.dispatch(new ToggleSidebar());
        },
      });
  }

  toggle(): void {
    this.store.dispatch(new ToggleSidebar());
  }

  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
