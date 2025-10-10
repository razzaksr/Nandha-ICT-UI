import { Component, OnInit } from '@angular/core';
import { Challanservice } from '../services/challanservice';
import { Challan } from '../models/challan';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  tempChallans:Challan[] = []

  editId: string|null=null

  challanForm!:FormGroup

  // dependency injection
  constructor(private serv:Challanservice, private builder:FormBuilder){}

  configureForm(){
    this.challanForm = this.builder.group({
      id: ['',[Validators.required,Validators.minLength(5)]],
      district:['',Validators.minLength(3)],
      vehicle:['',[Validators.required,Validators.minLength(8)]],
      fine:[0,[Validators.required,Validators.min(1)]]
    })
  }

  generating(){
    if(this.challanForm.invalid)return
    const colleted = this.challanForm.value
    if(this.editId!=null){
      this.serv.updating(this.editId,colleted).subscribe(()=>this.loading())
      this.editId=null
    }
    else{
      this.serv.creating(colleted).subscribe(()=>this.loading())
    }
    this.challanForm.reset()
  }

  loading(){
    this.serv.getAll().subscribe(objs=>this.tempChallans=objs)
  }
  ngOnInit(): void {
    this.loading()
    this.configureForm()
  }
  onRemoveCalled(id:string){
    this.serv.removeViaId(id).subscribe(()=>this.loading())
  }

  modify(id:string){
    this.editId=id
    const found = this.tempChallans.filter(obj=>obj.id==id)[0]
    this.challanForm.patchValue(found)
    this.loading()
  }
}
