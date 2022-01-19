// @ts-ignore

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginGuard} from "./login/guards/login-guard";
import {UserGuard} from "./login/guards/user-guard";
import {LoginComponent} from "./login/components/login/login.component";


@NgModule({
  imports: [],
  exports: []
})
export class AppRoutingModule {
}
