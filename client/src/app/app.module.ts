import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './pages/main/header/header.component';
import { FooterComponent } from './pages/main/footer/footer.component';
import { MenuSidebarComponent } from './pages/main/menu-sidebar/menu-sidebar.component';
import { BlankComponent } from './views/blank/blank.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './views/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MessagesDropdownMenuComponent } from './pages/main/header/messages-dropdown-menu/messages-dropdown-menu.component';
import { NotificationsDropdownMenuComponent } from './pages/main/header/notifications-dropdown-menu/notifications-dropdown-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppButtonComponent } from './components/app-button/app-button.component';

import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import { UserDropdownMenuComponent } from './pages/main/header/user-dropdown-menu/user-dropdown-menu.component';
import { GroupComponent } from './views/group/group.component';
import { GroupListComponent } from './views/group/group-list/group-list.component';
import { AccountsComponent } from './views/accounts/accounts.component';
import { AccountsListComponent } from './views/accounts/accounts-list/accounts-list.component';
import { UsersComponent } from './views/users/users.component';
import { StaffComponent } from './views/staff/staff.component';
import { TransactionComponent } from './views/transactions/transaction/transaction.component';
import { TransactionsListComponent } from './views/transactions/transactions-list/transactions-list.component';
import { OrderByPipe } from './_filter/order-by.pipe';
import { ResourcesComponent } from './views/resources/resources.component';
import { ListComponent } from './views/resources/list/list.component';
import { CreateComponent } from './views/resources/create/create.component';
import { ReportsComponent } from './views/reports/reports.component';
import { UsersListComponent } from './views/users/users-list/users-list.component';
import { UserCreateComponent } from './views/users/user-create/user-create.component';
import { UserEditComponent } from './views/users/user-edit/user-edit.component';
import { GroupCreateComponent } from './views/group/group-create/group-create.component';
import { GroupEditComponent } from './views/group/group-edit/group-edit.component';
import { StaffListComponent } from './views/staff/staff-list/staff-list.component';
import { StaffEditComponent } from './views/staff/staff-edit/staff-edit.component';
import { StaffCreateComponent } from './views/staff/staff-create/staff-create.component';
import { ResourcesListComponent } from './views/resources/resources-list/resources-list.component';
import { ResourceCreateComponent } from './views/resources/resource-create/resource-create.component';
import { ResourceEditComponent } from './views/resources/resource-edit/resource-edit.component';
import { SavingsComponent } from './views/transactions/savings/savings.component';
import { LoansComponent } from './views/transactions/loans/loans.component';
import { DividendsComponent } from './views/transactions/dividends/dividends.component';
import { DividendComponent } from './views/transactions/dividend/dividend.component';

registerLocaleData(localeEn, 'en-EN');

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MenuSidebarComponent,
    BlankComponent,
    ProfileComponent,
    RegisterComponent,
    DashboardComponent,
    MessagesDropdownMenuComponent,
    NotificationsDropdownMenuComponent,
    AppButtonComponent,
    UserDropdownMenuComponent,
    GroupComponent,
    GroupListComponent,
    AccountsComponent,
    AccountsListComponent,
    UsersComponent,
    StaffComponent,
    TransactionComponent,
    TransactionsListComponent,
    OrderByPipe,
    ResourcesComponent,
    ListComponent,
    CreateComponent,
    ReportsComponent,
    UsersListComponent,
    UserCreateComponent,
    UserEditComponent,
    GroupCreateComponent,
    GroupEditComponent,
    StaffListComponent,
    StaffEditComponent,
    StaffCreateComponent,
    ResourcesListComponent,
    ResourceCreateComponent,
    ResourceEditComponent,
    SavingsComponent,
    LoansComponent,
    DividendsComponent,
    DividendComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
