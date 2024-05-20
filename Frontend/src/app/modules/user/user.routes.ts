import { Routes } from "@angular/router";
import { ViewComponent } from "./view-component/view.component"; 
import { UserLayoutComponent } from "./user-layout-component/user-layout.component";
import { PersonajesComponent } from "./personajes/personajes.component";
import { ViewGuionComponent } from "./view-guion-component/view-guion.component";

export const USER_ROUTES: Routes =[
    
    {path: 'view', component:ViewComponent},  //vista principal
    {path: ':id', component:ViewGuionComponent},  //vista del guion elegido

];
