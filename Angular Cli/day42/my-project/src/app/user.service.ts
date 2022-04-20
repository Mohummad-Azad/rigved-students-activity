import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl : string = "http://localhost:3001/user";
  constructor(private http : HttpClient) { }

  public storeUser(formValue: any) : Observable<any> {
    return this.http.post(this.baseUrl, formValue);
  }

  public getUser() : Observable<any> {
    return this.http.get(this.baseUrl);
  }

  public deleteUser(_id : number) : Observable<any> {
    return this.http.delete(this.baseUrl)
  }

 
}
