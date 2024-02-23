import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogLayoutComponent } from './components/blog-layout/blog-layout.component';

const routes: Routes = [{ path: '', component: BlogLayoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
