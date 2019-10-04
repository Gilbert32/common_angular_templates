import {AgGridColumn} from 'ag-grid-angular';
import {ColDef} from 'ag-grid-community';
import {DateCellRendererComponent} from '../components/common/cellRenderers/date-cell-renderer/date-cell-renderer.component';

export class TableHeaders {
  public static getColumnDefs(classType: string): Array<ColDef> {
    switch (classType.toLowerCase()) {
      case 'firsttype':
        return [
          {headerName: 'Episode Number', field: 'ep_number', filter: 'agNumberColumnFiler'},
          {headerName: 'Number in Season', field: 'ep_number_season', filter: 'agNumberColumnFiler', pinned: true},
          {headerName: 'Title', field: 'ep_title', filter: 'agTextColumnFiler'},
          {headerName: 'Director', field: 'ep_director', filter: 'agTextColumnFilter'},
          {headerName: 'Writer', field: 'ep_writer', filter: 'agTextColumnFilter'},
          {headerName: 'Air Date', field: 'ep_air_date', filter: 'agDateColumnFilter', cellRendererFramework: DateCellRendererComponent},
        ];
      default:
        return null;
    }
  }
}
