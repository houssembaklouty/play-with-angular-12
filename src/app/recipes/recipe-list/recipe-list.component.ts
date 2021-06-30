import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe  ', 'this is simply description', 'https://i.pinimg.com/originals/f8/d8/62/f8d862135c18ee203740c9c693b67716.jpg'),
    new Recipe('A test recipe 2', 'this is simply description', 'https://i.pinimg.com/originals/f8/d8/62/f8d862135c18ee203740c9c693b67716.jpg'),
    new Recipe('A test recipe 3', 'this is simply description', 'https://i.pinimg.com/originals/f8/d8/62/f8d862135c18ee203740c9c693b67716.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
