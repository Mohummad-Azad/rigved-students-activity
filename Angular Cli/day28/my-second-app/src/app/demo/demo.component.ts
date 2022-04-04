import { Component } from "@angular/core";

@Component({
    selector : 'demo',
    template : `<div>
    <h2> This is Demo Component</h2>
    <p>Username is {{username}}</p>
    <h2>End of DemoComponent</h2>
    </div>`
})

export class DemoComponent {
    username : string ="Azad Sarkar";
}