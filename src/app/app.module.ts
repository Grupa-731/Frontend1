import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/components/login/login.component';
import {NavbarComponent} from './pages/components/navbar/navbar.component';
import {PegPageComponent} from './pages/components/peg-page/peg-page.component';
import {PegListComponent} from './pages/components/peg-list/peg-list.component';
import {PegDialogContent, RequestPegComponent} from './pages/components/request-peg/request-peg.component';
import {LoginModule} from "./login/login.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {AppRoutingModule} from "./app-routing.module";
import {PagesModule} from "./pages/pages.module";
import {AddManagerDialogContent, ManagerComponent} from './pages/components/manager/manager.component';
import {AddUserComponent, AddUserDialogContent} from './pages/components/add-user/add-user.component';
import {MatDividerModule} from "@angular/material/divider";
import {DialogContent, RequestFeedbackComponent} from './pages/components/request-feedback/request-feedback.component';
import {FeedbackPageComponent} from './pages/components/feedback-page/feedback-page.component';
import {RouterModule, Routes} from "@angular/router";
import {LoginGuard} from "./login/guards/login-guard";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatIconModule} from "@angular/material/icon";
import {NgxStarRatingModule} from 'ngx-star-rating';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from "@angular/material/dialog";
import {UserComponent} from "./pages/components/user/user.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: UserComponent
  },
  {
    path: 'peg',
    component: PegPageComponent
  },
  {
    path: 'feedback',
    component: RequestFeedbackComponent
  },
  {
    path: 'add-user',
    component: AddUserComponent
  },
  {
    path: 'add-manager',
    component: ManagerComponent
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
    FeedbackPageComponent,
    DialogContent,
    AddUserDialogContent,
    AddManagerDialogContent,
    PegDialogContent
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
    MatIconModule,
    NgxStarRatingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],
  exports: [
    NavbarComponent,
    DialogContent,
    AddUserDialogContent,
    AddManagerDialogContent,
    PegDialogContent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
