import { Component, OnInit } from '@angular/core';
import { Challanservice } from '../services/challanservice';
import { Challan } from '../models/challan';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Moveup } from "../directives/moveup";
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Userservice } from '../services/userservice';
import { Login } from "../login/login";

@Component({
  selector: 'app-dashboard',
  imports: [ReactiveFormsModule, FormsModule, Moveup, Login],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  animations:[
    trigger('growAndShrink',[
      state('normal',style({transform:'scale(1)'})),
      state('enlarged',style({transform:'scale(1.5)'})),
      transition('normal<=>enlarged',animate('300ms ease-in-out'))
    ])
  ]
})
export class Dashboard implements OnInit {

  triggerPoint = false
  state: 'normal' | 'enlarged' = 'normal'
  tempChallans:Challan[] = []

  growOrChange(){
    this.state = this.state==='normal'?'enlarged':'normal'
  }

  editId: string|null=null

  challanForm!:FormGroup

  // dependency injection
  constructor(public auth:Userservice,private serv:Challanservice, private builder:FormBuilder){}

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
    this.triggerPoint = !this.triggerPoint
    this.editId=id
    const found = this.tempChallans.filter(obj=>obj.id==id)[0]
    this.challanForm.patchValue(found)
    this.loading()
  }
}
