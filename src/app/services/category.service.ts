import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icategory } from '../interfaces/icategory';
import { Ivibe } from '../interfaces/ivibe';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategory() {
    return this.http.get<Icategory[]>('http://localhost:3000/categories');
  }

}
