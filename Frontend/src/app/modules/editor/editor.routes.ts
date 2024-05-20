import { Routes } from "@angular/router";
import { EditorComponent } from "./editor-component/editor.component";

export const EDITOR_ROUTES: Routes =[
    {path: ':id', component:EditorComponent}
];
