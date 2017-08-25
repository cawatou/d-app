import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DTableComponent}   from './d-table.component';

const routes: Routes = [
  {path: '', redirectTo: '/table-of-dragons', pathMatch: 'full'},
  {path: 'table-of-dragons', component: DTableComponent},
  //{path: 'how-to-breed/:name', component: HowToBreedComponent},
  //{path: 'breeding', component: BreedingComponent},
  //{path: 'calculators', component: CalculatorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
