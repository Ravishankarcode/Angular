import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  buttonDisabled = false;
  serverCreationStatus = "No Server was created";
  serverName = "something";

  onCreateServer(){
    this.serverCreationStatus ="Server is created";
  }

  onUpdateServerName(event : any){
   this.serverName = (<HTMLInputElement>event.target).value;
  }
}
