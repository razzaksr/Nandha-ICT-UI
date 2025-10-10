import { Component, OnInit } from '@angular/core';
import { Challanservice } from '../services/challanservice';
import { Challan } from '../models/challan';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  tempChallans:Challan[] = []

  // dependency injection
  constructor(private serv:Challanservice){}
  loading(){
    this.serv.getAll().subscribe(objs=>this.tempChallans=objs)
  }
  ngOnInit(): void {
    this.loading()
  }
  onRemoveCalled(id:string){
    this.serv.removeViaId(id).subscribe(()=>this.loading())
  }

}
