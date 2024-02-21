import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-under-cunstruction',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div
      class="h-100 flex-column d-flex align-items-center justify-content-center "
    >
      <h1 class="fw-bold text-primary">UNDER CUNSTRUCTION!</h1>
      <p class="text-dark">Please come back as soon as possible.</p>
      <button
        routerLink="/"
        class="btn btn-dark px-4 fs-5 text-uppercase fw-semibold"
      >
        Go Home
      </button>
    </div>
  `,
})
export class UnderCunstructionComponent {}
