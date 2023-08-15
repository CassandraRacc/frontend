import { Component } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { Iarticle } from '../interfaces/iarticle';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
 
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
