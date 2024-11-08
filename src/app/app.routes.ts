import { Routes } from '@angular/router';
import { HomeComponent } from './MyComponents/home/home.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { DirectivesComponent } from './MyComponents/directives/directives.component';
import { ComponentsComponent } from './MyComponents/components/components.component';


export const routes: Routes = [
    {path:"home",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"directives",component:DirectivesComponent},
    {path:"components",component:ComponentsComponent}

];
