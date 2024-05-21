import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkeletonComponent } from './modules/layout/skeleton/skeleton.component';
import { AuthGuard } from './core/guards/auth-guards';
import { LoginRedirectGuard } from './core/guards/loguinRedirect-guard';


export const routes: Routes = [
    {path: 'auth', canActivate: [LoginRedirectGuard],
        loadChildren: () => import ('./modules/auth/auth.routes').then(m => m.AUTH_ROUTES)
    },
    {path: 'dashboard', component: SkeletonComponent, canActivate: [AuthGuard],
        children: [
            {
                path: '',
                loadChildren: () => import ('./modules/dashboard/dashboard.routes').then(m => m.USER_ROUTES)

            },
            {
                path: 'editor',
                loadChildren: () => import ('./modules/editor/editor.routes').then(m => m.EDITOR_ROUTES)
            }
        ]
    },
    {
        path: '**', 
        redirectTo: '/dashboard', 
        pathMatch: 'full'
    }
];

/*
http://localhost:4200/auth/login
http://localhost:4200/auth/register
http://localhost:4200/dashboard/
http://localhost:4200/dashboard/1
http://localhost:4200/dashboard/editor/1
*/