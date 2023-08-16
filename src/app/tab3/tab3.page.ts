import { Component } from '@angular/core';
import { Iarticle } from '../interfaces/iarticle';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

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
