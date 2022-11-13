import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {BookModel} from '../models/book.model'

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}
  getBooks() {
    return this.http.get('http://localhost:3000/books')
  }
  removeBook(id: string) {
    return this.http.delete('http://localhost:3000/books/' + id)
  }
  updateBook(id: string, book: BookModel) {
    return this.http.put('http://localhost:3000/books/' + id, book)
  }
  addBook(book: BookModel) {
    return this.http.post('http://localhost:3000/books', book)
  }
}
