import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomePageComponent } from './home-page/home-page.component';
import { StartRoundComponent } from './start-round/start-round.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RoundEntryComponent } from './round-entry/round-entry.component';
import { CoursePickerComponent } from './start-round/components/course-picker/course-picker.component';
import { PracticeEntryComponent } from './practice-entry/practice-entry.component';
import { JumbotronComponent } from '../pages/home-page/jumbotron/jumbotron.component';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule
  ],
  declarations: 
  [HomePageComponent, 
    StartRoundComponent, 
    SignInComponent, 
    RoundEntryComponent, 
    CoursePickerComponent, 
    PracticeEntryComponent,
    JumbotronComponent,
    SignUpComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule { }
