import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NavbarComponent
  ],
  declarations: [NavbarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
