import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { V2RoutingModule } from './v2-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgxsModule } from '@ngxs/store';
import { MobileNavState } from './states/mobile-nav.state';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    V2RoutingModule,
    NgxsModule.forFeature([MobileNavState]),
  ],
})
export class V2Module {}
