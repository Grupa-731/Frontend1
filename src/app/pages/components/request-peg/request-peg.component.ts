import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-request-peg',
  templateUrl: './request-peg.component.html',
  styleUrls: ['./request-peg.component.scss']
})
export class RequestPegComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(PegDialogContent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
@Component({
  selector: 'peg-dialog-content',
  templateUrl: 'peg-dialog-content.html',
})
export class PegDialogContent {}
