# Dropdown Directive

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code changes In
1) app.module.ts
   ```
   import { DropdownDirective } from './dropdown.directive';
   
   @NgModule({
   declarations: [
    DropdownDirective
   ]
   })
   ```
2) app.component.html
 ```
<div class="row" style="margin-left: 10px;">
    <div class="col-xs-12">
        <div class="btn-group" appDropdown>
            <button 
            type="button" 
            class="btn btn-primary dropdown-toggle">
            Manage Recipe <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
                <li><a href="#"> To shopping list</a></li>
                <li><a href="#"> Edit Recipe</a></li>
                <li><a href="#"> Delete Recipe</a></li>
            </ul>
        </div>
    </div>
</div>
 ```
 3) dropdown.directive.ts
 ```
 import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}

 ```
 ## Output
 
 for output of this code , check on this link
 [Output](https://stackblitz.com/edit/dropdown-directive-demo)
