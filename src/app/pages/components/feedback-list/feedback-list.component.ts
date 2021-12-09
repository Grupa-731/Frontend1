import {Component, OnInit} from '@angular/core';

export interface PeriodicElement {
  pegID: number;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {pegID: 1, status: 'Pending'},
  {pegID: 2, status: 'Pending'},
  {pegID: 3, status: 'Done'},
];

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html'
  /*styleUrls: ['./feedback-list.component.scss']*/
})
export class FeedbackListComponent implements OnInit {

  constructor() {
  }

  displayedColumns: string[] = ['pegID', 'status'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  }

}
