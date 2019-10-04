import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule, MatButtonModule} from '@angular/material';
import { PredictionComponent } from './components/prediction/prediction.component';
import {HttpClientModule} from '@angular/common/http';
import {AgGridModule} from 'ag-grid-angular';
import { ExampleTableComponent } from './components/example-table/example-table.component';
import { TableComponent } from './components/common/table/table.component';
import { DateCellRendererComponent } from './components/common/cellRenderers/date-cell-renderer/date-cell-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    PredictionComponent,
    ExampleTableComponent,
    TableComponent,
    DateCellRendererComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule,
    AgGridModule.withComponents([
      DateCellRendererComponent
    ])
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
