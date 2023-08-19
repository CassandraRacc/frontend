import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iarticle } from '../interfaces/iarticle';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategory(category:string) {
    return this.http.get<Iarticle[]>('http://localhost:3000/filter${category}');
  }
}
