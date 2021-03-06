import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PredictionComponent} from './components/prediction/prediction.component';
import {ExampleTableComponent} from './components/example-table/example-table.component';


const routes: Routes = [
  {path: '', redirectTo: '/prediction', pathMatch: 'full'},
  {path: 'prediction', component: PredictionComponent},
  {path: 'table', component: ExampleTableComponent},
  {path: '**', redirectTo: '/prediction'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
