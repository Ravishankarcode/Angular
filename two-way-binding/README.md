# Two Way Binding

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Syntex of Two-Way-Binding

`[(ngModel)]="data"`

## Code changes In
1) app.module.ts
   ```
   import {FormsModule} from '@angular/forms';
   
   @NgModule({
   imports: [
    FormsModule
   ]
   })
   ```
2) app.component.html
 ```
 <input type="text" [(ngModel)]="name">
 <p>{{ name }}</p>
 ```
 ## Output
 
 for output of this code , check on this link
 [Output](https://stackblitz.com/edit/2waybinding)
