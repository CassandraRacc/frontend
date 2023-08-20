import { Component, OnInit, } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { Iarticle } from '../interfaces/iarticle';
import { CategoryService } from '../services/category.service';
import { Icategory } from '../interfaces/icategory';




@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  articles!: Iarticle[];
  categories!: Icategory[];
  





  constructor(private articleservice: ArticlesService, private categoryservice: CategoryService ) {

    articleservice.getArticles().subscribe({
      next: (results) => {
        this.articles = results
        console.log(this.articles)
      },
      error: (err) => {
        console.log('an Error occured')
      }
    });


    categoryservice.getCategory().subscribe({
      next: (results) => {
        this.categories = results
        console.log(this.categories)
      },
      error: (err) => {
        console.log('an Error occured');
      }
    });

  }


  
}


  





