import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EntryService {
  baseUrl:string = 'http://localhost:59131/api/entries/'
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.baseUrl);
  }

  createEntry(entry:any){
    return this.http.post(this.baseUrl, entry);
  }

  updateEntry(id:any,entry:any){
    return this.http.put(this.baseUrl + '/' + id, entry);
  }
}
