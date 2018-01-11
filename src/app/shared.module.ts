import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule
  ],
  exports: [
    CommonModule,
    MatMenuModule
  ],
  declarations: []
})
export class SharedModule { }
