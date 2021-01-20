import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { EntryService } from '../entry.service';
import { EntryElement } from '../interfaces/EntryElement';
import { UpdateEntryComponent } from '../update-entry/update-entry.component';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {

  displayedColumns: string[] = ['Description', 'IsExpense', 'Value','Actions'];
  dataSource: any;

  constructor(private service:EntryService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((data) =>{
      this.dataSource = new MatTableDataSource<EntryElement>(data as EntryElement[]);
    })
  }
  updateEntry(entry:any){
    this.dialog.open(UpdateEntryComponent, {data: {
      Id: entry.Id,
      Description: entry.Description,
      IsExpense: entry.IsExpense,
      Value: entry.Value
    }})
  }

}
