# ngIf-Else

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code changes In
1) app.component.ts
```   
export class AppComponent  {
  serverName = "server123";
  serverCrated = true;
}
```
2) app.component.html
```
<p *ngIf="serverCrated; else noServer">Server was created, Server name is {{ serverName }} </p>
<ng-template #noServer>No Server was Created!</ng-template>

 ```
 ## Output
 
 for output of this code , check on this link
 [Output](https://stackblitz.com/edit/ngifelse-example)
