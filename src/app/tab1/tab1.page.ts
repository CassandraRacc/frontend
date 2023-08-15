import { Component } from '@angular/core';
import { Iarticle } from '../interfaces/iarticle';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

 articles!:Iarticle[];

  constructor(private articleservice:ArticlesService) {

    articleservice.getArticles().subscribe({
      next: (results) => {
        this.articles = results
        console.log(this.articles)
      }, 
      error:(err) => {
        console.log('an Error occured')
      }
    });
  }

}
