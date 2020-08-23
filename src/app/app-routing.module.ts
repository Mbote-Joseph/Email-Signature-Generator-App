import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';
import { CreateComponent } from './components/create/create.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    
    {path:'create', component:CreateComponent},
    {path:'templates', component: TemplatesComponent},
    

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);