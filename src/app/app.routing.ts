import { Routes } from "@angular/router";

import { StartRoundComponent } from "./pages/start-round/start-round.component";
import { HomePageComponent } from './pages/home-page/home-page.component';

export const appRoutes: Routes = [
    {path: 'start-round', component: StartRoundComponent },
    {path: 'home', component: HomePageComponent },
    {path: '', redirectTo: 'home', pathMatch: 'full' }
];