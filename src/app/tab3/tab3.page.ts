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


  //USE THIS (edit) for the outline it method
  //Get task Id from URL
  //   let taskId = route.snapshot.paramMap.get('task_id');


  //   //edit mode
  //   if (taskId !== null) {
  //     this.isEdit = true;
  //     this.editId = parseInt(taskId);

  //     //get task from DB and pre-populate form with the data
  //     taskService.getTask(this.editId).subscribe({
  //       next: (result) => {
  //         this.taskForm.patchValue(result); //populate form with task data
  //       }
  //     })
  //   }

}
