import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component'
import { ShoppingListEditComponent } from './shopping/shopping-list-edit/shopping-list-edit.component'
import { RecipeListComponent } from './recipies/recipe-list/recipe-list.component'
import { RecipeItemComponent } from './recipies/recipe-item/recipe-item.component'
import { RecipeDetailComponent } from './recipies/recipe-detail/recipe-detail.component'
import { FooterComponent } from './footer/footer.component'
import { NavigationComponent } from './navigation/navigation.component'
import { PageComponent } from './page/page.component'

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
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
