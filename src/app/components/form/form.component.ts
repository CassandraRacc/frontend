import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  subscribeForm: FormGroup;

  constructor(private fb:FormBuilder) {
    this.subscribeForm = fb.group({
      first_name:['', [Validators.required]],
      last_name:['', [Validators.required]],
      email:['', [Validators.required]],
    });
   }

  onSubmit(){
    console.log(this.subscribeForm.value)
  }

  ngOnInit() {
    
  }

}
