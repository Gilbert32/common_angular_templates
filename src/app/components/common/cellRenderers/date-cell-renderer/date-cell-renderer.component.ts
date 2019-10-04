import {Component, OnInit} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {ICellRendererParams} from 'ag-grid-community';

@Component({
  selector: 'app-date-cell-renderer',
  templateUrl: './date-cell-renderer.component.html',
  styleUrls: ['./date-cell-renderer.component.scss']
})
export class DateCellRendererComponent implements ICellRendererAngularComp {
  public params: string;

  constructor() {
  }

  agInit(params: ICellRendererParams): void {
    this.params = params.value;
  }

  refresh(params: any): boolean {
    return false;
  }

}
