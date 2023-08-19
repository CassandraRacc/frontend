import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Isubscribe } from '../interfaces/isubscribe';


@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(private http: HttpClient) { 
  }

  newSubscribe(formData:any){
    return this.http.post<Isubscribe>('http://localhost:3000/subscribes', formData);
  }
}
