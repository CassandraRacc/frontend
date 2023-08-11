import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iarticle } from '../interfaces/iarticle';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  getArticles(){
    return this.http.get<Iarticle[]>('http://localhost:3000/articles');
  }

  getArticle(articleCategory:string){
    return this.http.get<Iarticle[]>(`http://localhost:3000/articles/${articleCategory}`);
  }


}
