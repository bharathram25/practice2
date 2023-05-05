import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-parent-table',
  templateUrl: './parent-table.component.html',
  styleUrls: ['./parent-table.component.scss']
})
export class ParentTableComponent {

  @Input() datapack!:any;
  @Output() Output = new EventEmitter<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource : any = [];
  actions : any = [];
  displayedColums!:string;

  ngOnChanges(){
    this.dataSource = new MatTableDataSource(this.datapack.value);
    this.displayedColums =this.datapack.col;
    this.actions=this.datapack.icon;

  }

  ngAfterViewInit(){
    setTimeout(()=>{
      this.dataSource.paginator = this.paginator;
    })
  }
}
