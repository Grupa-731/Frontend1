import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-request-feedback',
  templateUrl: './request-feedback.component.html',
  styleUrls: ['./request-feedback.component.scss']
})
export class RequestFeedbackComponent implements OnInit {
  form: FormGroup;
  durationInSeconds = 5;
  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this.form = this.fb.group({
      rating1: ['', Validators.required],
      rating2: ['', Validators.required],
      rating3: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
@Component({
  selector: 'dialog-content',
  templateUrl: 'dialog-content.html',
})
export class DialogContent {}
