import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-resultlist',
  templateUrl: './resultlist.component.html',
　styleUrls: [ './resultlist.component.css' ]
})
export class ResultlistComponent {
  displayedColumns = ['position', 'sdate', 'kbn', 'denno', 'mcode','mname',
                      'insuu','outsu','zaiko', 'bikou'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
  export interface Element {
    position: number;
    sdate: string;
    kbn: string;
    denno: string;
    mcode: string;
    mname: string;
    insuu: number;
    outsu: number;
    zaiko: number;
    bikou: string;
  }

  const ELEMENT_DATA: Element[] = [
    {position: 1, sdate: '2018/02/01', kbn: '受注出庫', denno: 'xxxxxx1',mcode: 'xxxx2',mname: '〇〇〇〇〇',
  　　　insuu:1,outsu:0,zaiko:135,bikou:'2018/02/01'},
    {position: 2, sdate: '2018/02/01', kbn: '受注出庫', denno: 'xxxxxx1',mcode: 'xxxx2',mname: '〇〇〇〇〇',
  　　　insuu:1,outsu:0,zaiko:135,bikou:'2018/02/01'},
  ];
