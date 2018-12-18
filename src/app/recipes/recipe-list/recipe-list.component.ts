import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Alpha', 'This is alpha recipe', 'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d'),
    // tslint:disable-next-line:max-line-length
    new Recipe('Beta', 'This is beta recipe', 'http://3.bp.blogspot.com/-qQrjsann34I/VXU0NVWdDxI/AAAAAAAADug/gpMpDcR9J8o/s640/pastapack.jpg')
  ];

  @Output()  recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
