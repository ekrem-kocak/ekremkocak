import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', loadChildren: () => import('./v1/v1.module').then(m => m.V1Module) }
  {
    path: '',
    loadChildren: () => import('./v2/v2.module').then((m) => m.V2Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
