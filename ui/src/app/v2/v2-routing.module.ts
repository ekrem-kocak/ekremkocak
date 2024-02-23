import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UnderCunstructionComponent } from '../shared/components/under-cunstruction/under-cunstruction.component';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/layout/layout.component').then(
        (c) => c.LayoutComponent
      ),
    children: [{ path: '', component: HomepageComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class V2RoutingModule {}
