
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-alluser',
  templateUrl: './alluser.component.html',
  styleUrls: ['./alluser.component.css']
})

export class AllUserComponent implements OnInit {
  
  
  userList:any


  constructor(private apiService:ApiService) { 
   
  }

  ngOnInit(): void {
    this.apiService. getAllUserList().subscribe((result:any)=>{
// console.log(result);
this.userList=result.users
console.log(this.userList);


    })
    
    
      
    }
   
  }