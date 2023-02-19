import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaComponent } from './social-media/social-media.component';
import { V1RoutingModule } from './v1-routing.module';



@NgModule({
  declarations: [
    SocialMediaComponent,
  ],
  imports: [
    CommonModule,
    V1RoutingModule,
  ]
})
export class V1Module { }
