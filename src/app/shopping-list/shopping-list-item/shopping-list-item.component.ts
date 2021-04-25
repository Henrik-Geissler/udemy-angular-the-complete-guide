import { Component, Input, OnInit } from '@angular/core'
import { Ingredient } from 'src/app/shared/ingredient/ingredient.model'

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.scss'],
})
export class ShoppingListItemComponent implements OnInit {
  @Input() ingredient: Ingredient
  constructor() {}

  ngOnInit(): void {}
}
