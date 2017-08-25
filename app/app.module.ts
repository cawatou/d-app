import { AppRoutingModule } from './app-routing.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './services/in-memory-data.service';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header.component';
import { AppFooterComponent } from './app-footer.component';
import { DTableComponent } from './d-table.component';
import { DragonService } from './services/dragon.service';
import { FormatCell } from './formatCell.pipe';
import { OrderBy } from './orderBy.pipe';
import { TableSortable } from './tableSortable.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    DTableComponent,
    FormatCell,
    OrderBy,
    TableSortable,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    //InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
  ],
  providers: [ DragonService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
