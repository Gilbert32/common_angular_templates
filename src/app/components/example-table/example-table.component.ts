import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-example-table',
  templateUrl: './example-table.component.html',
  styleUrls: ['./example-table.component.scss']
})
export class ExampleTableComponent implements OnInit {
  tableData = [
    {
      ep_number: 308,
      ep_number_season: 1,
      ep_title: 'Back and to the Future',
      ep_director: 'John Showalter',
      ep_writer: 'Andrew Dabb',
      ep_air_date: new Date('10/10/2019')
    },
    {
      ep_number: 309,
      ep_number_season: 2,
      ep_title: 'Raising Hell',
      ep_director: 'Robert Singer',
      ep_writer: 'Brad Buckner & Eugenie Ross-Leming',
      ep_air_date: new Date('10/17/2019')
    },
  ];

  constructor() {
  }

  ngOnInit() {
    // this.service.getTableData().subscribe(data => this.tableData = data);
  }

  log(a) {
    console.log(a);
  }

}
