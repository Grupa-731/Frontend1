import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  profilePage() {
    this.router.navigate(['profile']);
  }
}
