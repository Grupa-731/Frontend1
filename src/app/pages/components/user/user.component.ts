import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addUser() {
    this.router.navigate(['add-user']);  }

  addManager() {
    this.router.navigate(['add-manager']);  }

  pegPage() {
    this.router.navigate(['peg']);
  }

  feedbackPage() {
    this.router.navigate(['feedback']);
  }
}
