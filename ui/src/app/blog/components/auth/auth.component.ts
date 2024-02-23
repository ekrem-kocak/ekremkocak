import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [],
  template: `
    <div class="form-container">
      <form>
        <h5 class="text-dark fw-bold fs-2 text-center">LOGIN</h5>
        <div class="mb-3">
          <label class="form-label fw-semibold">Username</label>
          <input type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <label class="form-label fw-semibold">Password</label>
          <input type="password" class="form-control" />
        </div>
        <button class="btn btn-dark w-100 fw-semibold py-2">Login</button>
      </form>
    </div>
  `,
  styleUrl: './auth.component.scss',
})
export class AuthComponent {}
