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
// category!:Iarticle[];

  constructor(private articleService: ArticlesService){

    articleService.getArticles().subscribe({
      next: (results)  => {
        this.articles = results;
      },
      error: (err) => {
        console.log(err);
      }
    });

    // articleService.getCategory().subscribe({
    //   next: (results)  => {
    //     this.category = results;
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   }
    // });

  }



}
