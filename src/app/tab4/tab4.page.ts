import { Component } from '@angular/core';
import { Ifact } from '../interfaces/ifact';
import { FunFactService } from '../services/fun-fact.service';
import { ArticlesService } from '../services/articles.service';
import { Iarticle } from '../interfaces/iarticle';
import { Ilink } from '../interfaces/ilink';


@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  facts!:Ifact[];
  articles!:Iarticle[];
  // links!:Ilink;
  

  constructor(private factsService:FunFactService, private articleservice:ArticlesService) {

    factsService.getFacts().subscribe({
      next: (results) => {
        this.facts = results
        console.log(this.facts);
      }, 
      error:(err) => {
        console.log('an Error occured');
      }
    });


    // factsService.getLink().subscribe({
    //   next: (results) => {
    //     this.links = results
    //     console.log(this.links);
    //   }, 
    //   error:(err) => {
    //     console.log('an Error occured');
    //   }
    // });


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
