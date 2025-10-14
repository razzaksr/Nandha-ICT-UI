import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Userservice {
  private authUrl="http://localhost:3000/users"
  constructor(private client:HttpClient){}
  // authorization functionalities
  // login
  siginingIn(user:string, pass:string):Observable<boolean>{
    return this.client.get<any[]>(`${this.authUrl}?username=${user}&password=${pass}`).pipe(
      map((objs)=>{
        if(objs.length>0){
          localStorage.setItem('logged',JSON.stringify(objs[0]))
          return true
        }
        return false
      })
    )
  }
  // logout
  signingOut():void{
    localStorage.removeItem('logged')
  }
  // check valid login
  isLoggedIn():boolean{
    return !!localStorage.getItem('logged')
  }
  // read user
  readUser():any{
    return JSON.parse(localStorage.getItem("logged")||'null')
  }
  // read role to compare actual user's role with expected role
  readRole(expected:string):boolean{
    const received = this.readUser()
    return received?.role===expected
  }
}
