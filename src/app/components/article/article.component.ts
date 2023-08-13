import { Component, Input, OnInit } from '@angular/core';
import { Iarticle } from 'src/app/interfaces/iarticle';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent  implements OnInit {

  @Input() article!: Iarticle

  constructor() { }

  ngOnInit() {}

}
