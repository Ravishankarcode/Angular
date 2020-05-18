# Property Event Binding

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Syntex of Property Binding

TypeScript Code(BL) ---Output Data---> Template(HTML)

`[property]="data"`

## Syntex of Event Binding

TypeScript Code(BL) <---React to (User) Events--- Template(HTML)

`(event)="expression"`

## Code changes In
1) app.component.ts
```   
export class AppComponent  {
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
```
2) app.component.html
```
<!-- String Interpolation -->
<p>I am new in {{ name }}</p>

<!-- Property Binding -->
<button class ="btn btn-primary" [disabled]="!buttonDisabled" >
  Disable</button>
<br/><br/>
<!-- Event Binding -->
<button class ="btn btn-primary" [disabled]="buttonDisabled" (click)="onCreateServer()">Add Server</button>
<p>{{ serverCreationStatus }}</p>

<input type="text" class="form-control" value="something"(input) = "onUpdateServerName($event)">
<p>{{ serverName }}</p>
 ```
 ## Output
 
 for output of this code , check on this link
 [Output](https://stackblitz.com/edit/propertyeventbinding)
