import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './home/components/home-layout/home-layout.component';
import { LoginLayoutComponent } from './login/components/login-layout/login-layout.component';
import { AuthGuard } from './Services/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeLayoutComponent , canActivate: [AuthGuard]},
  { path: 'login', component: LoginLayoutComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
