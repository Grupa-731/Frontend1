import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/components/login/login.component';
import { NavbarComponent } from './pages/components/navbar/navbar.component';
import { PegPageComponent } from './pages/components/peg-page/peg-page.component';
import { PegListComponent } from './pages/components/peg-list/peg-list.component';
import { RequestPegComponent } from './pages/components/request-peg/request-peg.component';
import {LoginModule} from "./login/login.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {AppRoutingModule} from "./app-routing.module";
import {PagesModule} from "./pages/pages.module";
import { ManagerComponent } from './pages/components/manager/manager.component';
import { AddUserComponent } from './pages/components/add-user/add-user.component';
import {MatDividerModule} from "@angular/material/divider";
import { RequestFeedbackComponent } from './pages/components/request-feedback/request-feedback.component';
import { FeedbackPageComponent } from './pages/components/feedback-page/feedback-page.component';
import {RouterModule, Routes} from "@angular/router";
import {LoginGuard} from "./login/guards/login-guard";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatIconModule} from "@angular/material/icon";

const routes: Routes = [
/*  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full'
  // },*/
  {
    path: 'login',
    component: LoginComponent
  },

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PegPageComponent,
    PegListComponent,
    RequestPegComponent,
    ManagerComponent,
    AddUserComponent,
    RequestFeedbackComponent,
    FeedbackPageComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    AppRoutingModule,
    PagesModule,
    MatDividerModule,
    RouterModule.forRoot(routes),
    RouterModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatIconModule
  ],
  providers: [],
  exports: [
    NavbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
