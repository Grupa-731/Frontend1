import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';



import { PagesRoutingModule } from './pages-routing.module';
import { UserComponent } from './components/user/user.component';
import {MatChipsModule} from "@angular/material/chips";


@NgModule({
  declarations: [
    UserComponent
  ],
  exports: [
    UserComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatChipsModule
  ]
})
export class PagesModule { }
