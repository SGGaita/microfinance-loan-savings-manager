import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { BlankComponent } from './views/blank/blank.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { GroupComponent } from './views/group/group.component';
import { GroupListComponent } from './views/group/group-list/group-list.component';
import {GroupCreateComponent} from './views/group/group-create/group-create.component';
import {GroupEditComponent} from './views/group/group-edit/group-edit.component';
import { AccountsComponent } from './views/accounts/accounts.component';
import { AccountsListComponent } from './views/accounts/accounts-list/accounts-list.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AuthGuard } from './utils/guards/auth.guard';
import { NonAuthGuard } from './utils/guards/non-auth.guard';
import { UsersComponent } from './views/users/users.component';
import { UsersListComponent } from './views/users/users-list/users-list.component';
import { UserCreateComponent } from './views/users/user-create/user-create.component';
import { UserEditComponent } from './views/users/user-edit/user-edit.component';
import { StaffComponent } from './views/staff/staff.component';
import { StaffListComponent } from './views/staff/staff-list/staff-list.component';
import { StaffCreateComponent } from './views/staff/staff-create/staff-create.component';
import { StaffEditComponent } from './views/staff/staff-edit/staff-edit.component';
import { TransactionComponent } from './views/transactions/transaction/transaction.component';
import { TransactionsListComponent } from './views/transactions/transactions-list/transactions-list.component';
import {ResourcesComponent} from './views/resources/resources.component';
import {ResourcesListComponent} from './views/resources/resources-list/resources-list.component';
import {ResourceCreateComponent} from './views/resources/resource-create/resource-create.component';
import {ResourceEditComponent} from './views/resources/resource-edit/resource-edit.component';
import {CreateComponent} from './views/resources/create/create.component';
import {ReportsComponent} from './views/reports/reports.component'
import { LoansComponent } from './views/transactions/loans/loans.component';
import { SavingsComponent } from './views/transactions/savings/savings.component';
import { DividendComponent } from './views/transactions/dividend/dividend.component';

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
        children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: GroupListComponent },
          {path:'create', component: GroupCreateComponent},
          {path:'edit', component: GroupEditComponent}
        ],
      },
      {
        path: 'accounts',
        component: AccountsComponent,
        children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: AccountsListComponent },
        ],
      },
      {
        path: 'transactions',
        component: TransactionComponent,
        children:[
          {path: '', redirectTo: 'list', pathMatch:'full'},
          {path: 'list', component: TransactionsListComponent},
          {path:'savings', 
          component: SavingsComponent,
        children:[]},
        {path:'loans', 
        component:LoansComponent,
      children:[

      ]},
      {path:'dividends',
       component:DividendComponent,
    children:[

    ]}
        ]
      },
      {
        path:'reports',
        component: ReportsComponent
      },
      {
        path:'resources',
        component: ResourcesComponent,
        children:[
          {path:'', redirectTo:'list', pathMatch:'full'},
          {path:'list', component:ResourcesListComponent},
          {path:'create', component: ResourceCreateComponent},
          {path:'edit', component: ResourceEditComponent}
        ]
      },
      {
        path: 'user',
        component: UsersComponent,
        children:[
          {path:'', redirectTo:'list', pathMatch:'full'},
          {path:'list', component:UsersListComponent},
          {path:'create', component:UserCreateComponent},
          {path:'edit', component:UserEditComponent}
        ]
      },
      {
        path: 'staff',
        component: StaffComponent,
        children:[
          {path:'', redirectTo:'list', pathMatch:'full'},
          {path:'list', component:StaffListComponent},
          {path:'create', component:StaffCreateComponent},
          {path:'edit', component:StaffEditComponent},
        ]
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
