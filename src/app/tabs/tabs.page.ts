import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  articles = [];

  constructor(private http: HttpClient, private articleService:ArticlesService) {
    this.loadArticles();
  }

  loadArticles() {
    this.http
    .get('http://localhost:3000/article')
    .subscribe((res: any) => {
      this.articles = res.results;
      console.log(this.articles);
    });
  }

}
