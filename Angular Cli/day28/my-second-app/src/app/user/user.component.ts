import { Component } from "@angular/core";

@Component({
    selector : 'user-app',
    templateUrl : './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent {
    name : string ="Alexnader";
    age :number = 21
}