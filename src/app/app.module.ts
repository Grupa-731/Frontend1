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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PegPageComponent,
    PegListComponent,
    RequestPegComponent
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
        PagesModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
