import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {

  }
  getCategories() {
    return this.http.get('http://localhost:3000/categories');
  }
  removeCategory(id: string) {
    return this.http.delete('http://localhost:3000/categories/' + id);
  }
  updateCategory(id: string, category: CategoryModel) {
    return this.http.put('http://localhost:3000/categories/' + id, category);
  }
  addCategory(category: CategoryModel) {
    return this.http.post('http://localhost:3000/categories', category);
  }
}
