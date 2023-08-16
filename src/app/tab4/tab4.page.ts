import { Component } from '@angular/core';
import { Ifact } from '../interfaces/ifact';
import { FunFactService } from '../services/fun-fact.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  facts!:Ifact[];

  constructor(private factsService:FunFactService) {

    factsService.getFacts().subscribe({
      next: (results) => {
        this.facts = results
        console.log(this.facts)
      }, 
      error:(err) => {
        console.log('an Error occured')
      }
    })
  }

}
