import { Component } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    name = 'Angular';
    ingredients: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Orange',10)
  ];
}
