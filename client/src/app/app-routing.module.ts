import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { BlankComponent } from './views/blank/blank.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { GroupComponent } from './views/group/group.component';
import { GroupListComponent } from './views/group-list/group-list.component';
import { AccountsComponent } from './views/accounts/accounts.component';
import { AccountsListComponent } from './views/accounts-list/accounts-list.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AuthGuard } from './utils/guards/auth.guard';
import { NonAuthGuard } from './utils/guards/non-auth.guard';
import { UsersComponent } from './views/users/users.component';
import {StaffComponent } from './views/staff/staff.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'blank',
        component: BlankComponent,
      },
      {
        path: 'group',
        component: GroupComponent,
        children:[
          {path:'', redirectTo: 'list', pathMatch: 'full'},
          {path: 'list', component: GroupListComponent}
        ]
      },
      {
        path: 'accounts',
        component: AccountsComponent,
        children:[
          {path:'', redirectTo: 'list', pathMatch: 'full'},
          {path: 'list', component: AccountsListComponent}
        ]
      },
      {
        path: 'user',
        component: UsersComponent
      },
      {
        path: 'staff',
        component: StaffComponent
      },
      {
        path: '',
        component: DashboardComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NonAuthGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [NonAuthGuard],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
