import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iarticle } from '../interfaces/iarticle';
import { Icategory } from '../interfaces/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategory() {
    return this.http.get<Icategory[]>('http://localhost:3000/categories');
  }
}
