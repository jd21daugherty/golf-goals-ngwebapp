import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesService } from './courses/courses.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    CoursesService
  ]
})
export class ServicesModule { }
