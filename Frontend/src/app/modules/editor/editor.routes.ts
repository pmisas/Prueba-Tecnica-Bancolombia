import { Routes } from "@angular/router";
import { EditorComponent } from "./editor-component/editor.component";
import { GuionComponent } from "./guion-component/guion.component";

export const EDITOR_ROUTES: Routes =[
    {path: ':id', component:GuionComponent}
];
