import {Component, Input} from '@angular/core'
//import { FormatCell } from './formatCell.pipe';
//import { OrderBy } from './orderBy.pipe';

@Component({
  selector: 'table-sortable',
  templateUrl: './tableSortable.component.html',
  styleUrls: ['css/tableSortable.component.css']
})
export class TableSortable {

  @Input() columns: any[];
  @Input() data: any[];
  @Input() sort: any;

  selectedClass(columnName): string{
    return columnName == this.sort.column ? 'sort-' + this.sort.descending : "false";
  }

  changeSorting(columnName): void{
    let sort = this.sort;
    if (sort.column == columnName) {
      sort.descending = !sort.descending;
    } else {
      sort.column = columnName;
      sort.descending = false;
    }
  }

  convertSorting(): string{
    return this.sort.descending ? '-' + this.sort.column : this.sort.column;
  }
}
//
