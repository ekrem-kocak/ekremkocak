import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from './primeng.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PrimeNgModule],
  exports: [CommonModule, PrimeNgModule],
})
export class SharedModule {}
