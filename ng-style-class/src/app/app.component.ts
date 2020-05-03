import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [ `
      .online{
      color: white;
    }  
  `
  ]
})
export class AppComponent {
  serverStatus = "offline";

  getColor(){
    return this.serverStatus === 'online'?'green':'red';
  }
}
