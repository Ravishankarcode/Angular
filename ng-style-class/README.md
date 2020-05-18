# ngStyle 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code changes In
1) app.component.ts
```   
@Component({
  styles: [ `
      .online{
      color: white;
    }  
  `
  ]
})
export class AppComponent  {
  serverStatus = "offline";
  getColor(){
    return this.serverStatus === 'online'?'green':'red';
  }
}
```
2) app.component.html
```
<p 
[ngStyle] = "{backgroundColor: getColor()}"
[ngClass] = "{online: serverStatus === 'online'}">
Server was created, Server status is {{ serverStatus }} 
</p>

 ```
 ## Output
 
 for output of this code , check on this link
 [Output](https://stackblitz.com/edit/ngstyleclass)
