import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ivibe } from '../interfaces/ivibe';

@Injectable({
  providedIn: 'root'
})
export class FeelService {

  constructor(private http:HttpClient) { }

  getVibe(){
    return this.http.get<Ivibe[]>('http://localhost:3000/vibes');
  }
}
