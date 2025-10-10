import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Challan } from '../models/challan';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Challanservice {
  constructor(private client:HttpClient){}
  dataUrl = "http://localhost:3000/challan"
  getAll():Observable<Challan[]>{
    return this.client.get<Challan[]>(this.dataUrl)
  }
  removeViaId(id:string):Observable<void>{
    return this.client.delete<void>(`${this.dataUrl}/${id}`)
  }
}
