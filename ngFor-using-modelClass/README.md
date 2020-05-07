# HelloWord

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Install Bootstrap package

Run `npm install --save bootstrap@4`.

## Code changes In
1) app.component.ts
```   
import { Ingredient } from './ingredient.model';
export class AppComponent implements OnInit {
  name = 'Angular';
    ingredients: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Orange',10)
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
```
2) app.component.html
```
<div class="row" style="margin-left: 10px;">
    <div class="col-xs-10">
        <ul class="list-group">
            <a 
            class="list-group-item" 
            style="cursor: pointer;"
            *ngFor = "let ingredient of ingredients">
        {{ ingredient.name }} ({{ ingredient.amount }})
        </a>
        </ul>
    </div>
</div>

 ```
 3) ingredient.model.ts
 ```
 export class Ingredient{
    public name: string;
    public amount: number;

    constructor(name:string,amount:number){
        this.name = name;
        this.amount = amount;
    }
}
 ```
 4) angular.json
 ```
 "styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
],
 ```
 ## Output
 
 for output of this code , check on this link
 [Output](https://stackblitz.com/edit/angular-ngfor-using-model)
