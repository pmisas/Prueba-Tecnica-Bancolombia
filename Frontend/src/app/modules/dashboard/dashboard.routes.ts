import { Routes } from "@angular/router";
import { ViewComponent } from "./view-component/view.component";
import { ViewGuionComponent } from "./view-guion-component/view-guion.component";

export const USER_ROUTES: Routes =[
    
    {path: '', component:ViewComponent},  //tarjetas
    {path: ':id', component:ViewGuionComponent},  //ver un guin (actores)

];
