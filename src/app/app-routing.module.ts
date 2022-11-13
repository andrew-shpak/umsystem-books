import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {MainComponent} from './layout/main/main.component'
import {CategoriesComponent} from './pages/categories/categories.component'
import {CreateCategoryComponent} from './pages/create-category/create-category.component'
import {PrivacyPolicyComponent} from './pages/privacy-policy/privacy-policy.component'
import {BooksComponent} from './pages/books/books.component'
import {BookComponent} from './pages/book/book.component'
import {CreateBookComponent} from './pages/create-book/create-book.component'

let routes: Routes
routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: MainComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'categories/create', component: CreateCategoryComponent},
  {path: 'books', component: BooksComponent},
  {path: 'books/create', component: CreateBookComponent},
  {path: 'book/:id', component: BookComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
