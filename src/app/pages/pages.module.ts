import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { StartRoundComponent } from './start-round/start-round.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RoundEntryComponent } from './round-entry/round-entry.component';
import { CoursePickerComponent } from './start-round/components/course-picker/course-picker.component';
import { PracticeEntryComponent } from './practice-entry/practice-entry.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: 
  [HomePageComponent, 
    StartRoundComponent, 
    SignInComponent, 
    RoundEntryComponent, 
    CoursePickerComponent, PracticeEntryComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule { }
