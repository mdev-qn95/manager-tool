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
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    '1995/02/18 12:12:12'),
    new Recipe("Chef John's Frozen Zabaglione",
    "See how to make this easy Italian-inspired dessert—no ice cream maker required.",
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    '1995/02/18 12:12:12')
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
