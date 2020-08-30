import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';
import { CreateComponent } from './components/create/create.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { HomeComponent } from './components/home/home.component';
import {ViewPageComponent} from './components/view-page/view-page.component';
const routes: Routes = [
    {path: '', component: ViewPageComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    {path:'create', component:CreateComponent , canActivate: [AuthGuard]},
    {path:'templates', component: TemplatesComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent , canActivate: [AuthGuard]},
    { path: 'register', component: RegisterComponent ,  canActivate: [AuthGuard]},
   // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);