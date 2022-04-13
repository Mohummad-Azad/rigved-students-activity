import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 userArray :any [] = [
   {userId:1, name:"Ajak" , dob:"1998-10-28"},
   {userId:2, name:"Kaif" , dob:"1988-12-18"}
 ]

  constructor() { }

  public getUsers() : any[] {
    return this.userArray;
  }

  public save(obj: any) : void {
    this.userArray.push(obj);
  }

  public delete(id: number) : void {
    for(let i = 0; i < this.userArray.length; i++) {
      let user = this.userArray[i];
      if(user.userId == id) {
        this.userArray.splice(i, 1);
      }
    }
  }


public update(id : number) : void {
  for(let i = 0; i < this.userArray.length; i++) {
    let user = this.userArray[i];
    if(user.userId == id) {
      this.userArray.concat(i, 1);
    }
  }
}

}
