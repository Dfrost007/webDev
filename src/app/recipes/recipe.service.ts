import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    constructor(private slService: ShoppingListService) {}

    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Steak',
        'Steak and Salad',
        'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d',
        [new Ingredient('Meat', 1),
         new Ingredient('Capsicum', 2),
         new Ingredient('Tomato', 2)]),
        // tslint:disable-next-line:max-line-length
        new Recipe('Noodles',
         'Chinese noodles with veggies',
         'http://3.bp.blogspot.com/-qQrjsann34I/VXU0NVWdDxI/AAAAAAAADug/gpMpDcR9J8o/s640/pastapack.jpg',
         [new Ingredient('noodles', 1),
         new Ingredient('Tomato', 2)])
      ];

    getRecipe() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
