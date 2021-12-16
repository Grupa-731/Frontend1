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
  selector: 'app-peg-list',
  templateUrl: './peg-list.component.html'
  /*styleUrls: ['./peg-list.component.scss']*/
})
export class PegListComponent implements OnInit {

  constructor() {
  }

  displayedColumns: string[] = ['pegID', 'status'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  }

}
