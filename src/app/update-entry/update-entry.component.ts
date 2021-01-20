import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EntryService } from '../entry.service';
import {Type} from '../interfaces/Type'
@Component({
  selector: 'app-update-entry',
  templateUrl: './update-entry.component.html',
  styleUrls: ['./update-entry.component.css']
})
export class UpdateEntryComponent implements OnInit {

  form:FormGroup;
  id:number;

  constructor(private fb:FormBuilder, 
              private dialogRef: MatDialogRef<UpdateEntryComponent>,
              private service:EntryService,
              @Inject(MAT_DIALOG_DATA) public data: {Description:any,IsExpense:any, Value:any,Id:any} ){ 
                this.id=data.Id;
                this.form = fb.group({
                  description: [data.Description, Validators.required],
                  isExpense: [data.IsExpense, Validators.required],
                  value: [data.Value, Validators.required],
                })
              }

  types: Type[] = [{value:true, display:'Expense'},{value: false, display: 'Income'}];
  close(){
    this.dialogRef.close();
  }
  save(){
    this.form.value.id = this.id;
    this.service.updateEntry(this.id, this.form.value).subscribe((data)=>console.log('Data - ', data));
  }
  ngOnInit(): void {
  }

}
