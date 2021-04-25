import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { ShoppingListComponent } from './shopping-list/shopping-list.component'
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component'
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component'
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component'
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component'
import { FooterComponent } from './footer/footer.component'
import { NavigationComponent } from './header/navigation/navigation.component'
import { PageComponent } from './page/page.component'
import { RecipesComponent } from './recipes/recipes.component'
import { ShoppingListItemComponent } from './shopping-list/shopping-list-item/shopping-list-item.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    FooterComponent,
    NavigationComponent,
    PageComponent,
    RecipesComponent,
    ShoppingListItemComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
