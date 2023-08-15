import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubscribeService } from 'src/app/services/subscribe.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  subscribeForm: FormGroup;

  constructor(private fb:FormBuilder, private subscribeService:SubscribeService) {

    this.subscribeForm = fb.group({
      first_name:['', [Validators.required]],
      last_name:['', [Validators.required]],
      email:['', [Validators.required]],
    });

   }

  onSubmit(){
    let formData = this.subscribeForm.value;
    console.log(formData)

    this.subscribeService.newSubscribe(formData).subscribe({
      next: (result) => {
        alert(`${result.first_name} has successfully Subscribed`);
      },
      error: (err) => {
        console.log(err);
        alert('Something went wrong');
      }
    });
  }

  //getters

  get first_name(){
    return this.subscribeForm.get('first_name')!;
  }
  get last_name(){
    return this.subscribeForm.get('last_name')!;
  }
  get email(){
    return this.subscribeForm.get('email')!;
  }

  ngOnInit() {
    
  }

}
