import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableData } from '../../table-data';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'portfolio-result-list',
  templateUrl: './portfolio-result-list.component.html',
  styleUrls: ['./portfolio-result-list.component.scss']
})
export class PortfolioResultListComponent implements OnInit {

  rows: Array<any> = [];
  columns: Array<any> = [
    { title: 'Name', name: 'name', },
    { title: 'Position', name: 'position', sort: false },
    { title: 'Office', className: ['office-header', 'text-success'], name: 'office', sort: 'asc' },
    { title: 'Extn.', name: 'ext' },
    { title: 'Start date', className: 'text-warning', name: 'startDate' },
    { title: 'Salary ($)', name: 'salary' }
  ];
  page = 1;
  itemsPerPage = 10;
  maxSize = 5;
  numPages = 1;
  length = 0;

  config = {
    paging: true,
    sorting: { columns: this.columns },
    filtering: { filterString: '' },
    className: ['table-striped', 'table-bordered']
  };

  private data: Array<any> = TableData;

  constructor(
    private router: Router,
  ) {
    this.length = this.data.length;
  }

  ngOnInit(): void {
    this.onChangeTable(this.config);
  }

  changePage(page: any, data: Array<any> = this.data): Array<any> {
    const start = (page.page - 1) * page.itemsPerPage;
    const end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  changeSort(data: any, config: any): any {
    if (!config.sorting) {
      return data;
    }

    const columns = this.config.sorting.columns || [];
    let columnName: string = void 0;
    let sort: string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous: any, current: any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  changeFilter(data: any, config: any): any {
    let filteredData: Array<any> = data;
    this.columns.forEach((column: any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item: any) => {
          return item[column.name].match(column.filtering.filterString);
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item: any) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));
    }

    const tempArray: Array<any> = [];
    filteredData.forEach((item: any) => {
      let flag = false;
      this.columns.forEach((column: any) => {
        if (item[column.name].toString().match(this.config.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }

  onChangeTable(config, page = { page: this.page, itemsPerPage: this.itemsPerPage }) {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    const filteredData = this.changeFilter(this.data, this.config);
    const sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

  onCellClick(data) {
    this.router.navigate(['/portfolio/individual']);
    console.log(data);
  }

}
