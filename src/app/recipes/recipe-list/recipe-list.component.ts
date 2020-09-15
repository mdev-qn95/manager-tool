import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Chef John's Frozen Zabaglione",
    "See how to make this easy Italian-inspired dessert—no ice cream maker required.",
    'https://assets.visme.co/templates/banners/thumbnails/i_Easy-Cocktail-Recipes-Animated-Vertical_full.jpg',
    '1995/02/18 12:12:12')
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
