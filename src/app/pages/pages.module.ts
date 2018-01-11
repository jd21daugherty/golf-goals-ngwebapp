import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { StartRoundComponent } from './start-round/start-round.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RoundEntryComponent } from './round-entry/round-entry.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomePageComponent, StartRoundComponent, SignInComponent, RoundEntryComponent]
})
export class PagesModule { }
