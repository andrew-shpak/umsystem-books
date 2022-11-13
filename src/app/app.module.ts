import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {HttpClientModule} from '@angular/common/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ReactiveFormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import {HeaderComponent} from './layout/header/header.component'
import {PrivacyPolicyComponent} from './pages/privacy-policy/privacy-policy.component'
import {NavComponent} from './layout/nav/nav.component'
import {AsideComponent} from './layout/aside/aside.component'
import {MainComponent} from './layout/main/main.component'
import {CategoriesComponent} from './pages/categories/categories.component'
import {CreateCategoryComponent} from './pages/create-category/create-category.component'
import {BooksComponent} from './pages/books/books.component'
import {BookComponent} from './pages/book/book.component'
import {ExamplePdfViewerComponent} from './example-pdf-viewer/example-pdf-viewer.component'
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer'
import {CreateBookComponent} from './pages/create-book/create-book.component'
import {MatPaginatorModule} from '@angular/material/paginator'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    MainComponent,
    AsideComponent,
    PrivacyPolicyComponent,
    CategoriesComponent,
    CreateCategoryComponent,
    BooksComponent,
    BookComponent,
    ExamplePdfViewerComponent,
    CreateBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgxExtendedPdfViewerModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
