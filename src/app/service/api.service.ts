import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  search: any;

  constructor(private api:HttpClient) { }
  getAllUserList(){
    return this.api.get('https://dummyjson.com/users')

  }
}
