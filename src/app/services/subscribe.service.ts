import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Isubscriber } from '../interfaces/isubscriber';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(private http: HttpClient) { 
  }

  newSubscribe(formData: any){
    return this.http.post<Isubscriber>('http:localhost:3000/subscribe', formData);
  }
}
