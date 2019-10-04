import {Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {AgGridAngular} from 'ag-grid-angular';
import {TableHeaders} from '../../../configuration/TableHeaders';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() data: Array<any> = new Input();
  @Input() height: string = new Input();
  @Input() classType: string = new Input();
  @Output() selectedRow: EventEmitter<any> = new EventEmitter<any>();
  @Output() doubleClicked: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('agGridTable', {static: false}) agGrid: AgGridAngular;
  rowData = [];
  getRowHeight: any;
  initialized = false;
  defaultColDef = {
    filterParams: {
      applyButton: true,
      clearButton: true,
      caseSensitive: false
    },
    sortable: true,
    resizable: true,
    filter: true
  };

  constructor() {
  }

  ngOnInit() {
  }
  gridReady(): void {
    this.agGrid.api.setColumnDefs(TableHeaders.getColumnDefs(this.classType));
    this.agGrid.api.setRowData(this.data);
    this.agGrid.api.sizeColumnsToFit();
    this.initialized = true;
  }

  updateSelectedRow(event) {
    this.selectedRow.emit(this.agGrid.api.getSelectedRows());
  }

  ngOnChanges() {
    if (this.initialized) {
      this.agGrid.api.setRowData(this.data);
    }
  }

  dblClickHandler(event: any) {
    this.doubleClicked.emit(event);
  }
}
