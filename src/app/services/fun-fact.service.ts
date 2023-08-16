import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ifact } from '../interfaces/ifact';

@Injectable({
  providedIn: 'root'
})
export class FunFactService {

  constructor(private http:HttpClient) { }


  getFacts(){
    return this.http.get<Ifact[]>('http://localhost:3000/fun_fact');
  }

}
