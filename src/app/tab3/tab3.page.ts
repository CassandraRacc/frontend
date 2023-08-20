import { Component } from '@angular/core';
import { Iarticle } from '../interfaces/iarticle';
import { ArticlesService } from '../services/articles.service';
import { FeelService } from '../services/feel.service';
import { Ivibe } from '../interfaces/ivibe';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  articles!:Iarticle[];
  vibes!:Ivibe[];

  constructor(private articleservice:ArticlesService, private feelService:FeelService) {

    articleservice.getArticles().subscribe({
      next: (results) => {
        this.articles = results
        console.log(this.articles)
      }, 
      error:(err) => {
        console.log('an Error occured')
      }
    });

    feelService.getVibe().subscribe({
      next: (results) => {
        this.vibes = results
        console.log(this.vibes)
      },
      error:(err) => {
        console.log('an Error occured')
      }
    });

  }


  outlineIt() {
    
  }

}
