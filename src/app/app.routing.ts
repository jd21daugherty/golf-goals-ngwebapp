import { Routes } from "@angular/router";

import { StartRoundComponent } from "./pages/start-round/start-round.component";
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

export const appRoutes: Routes = [
    {path: 'start-round', component: StartRoundComponent },
    {path: 'home', component: HomePageComponent },
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'sign-in', component: SignInComponent },
    {path: 'sign-up', component: SignUpComponent}
];