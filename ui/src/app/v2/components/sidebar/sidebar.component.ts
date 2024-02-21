import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { MobileNavState } from '../../states/mobile-nav.state';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface SocialMedia {
  url: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Select(MobileNavState.getVisibility) visibility$:
    | Observable<boolean>
    | undefined;

  date = Date.now();

  socialMedias: SocialMedia[] = [
    {
      url: 'https://www.linkedin.com/in/ekremkocak/',
      icon: 'fa-brands fa-linkedin-in',
    },
    { url: 'https://github.com/ekrem-kocak', icon: 'fa-brands fa-github' },
    {
      url: 'https://stackoverflow.com/users/13545243/ekremkocak',
      icon: 'fa-brands fa-stack-overflow',
    },
  ];
}
