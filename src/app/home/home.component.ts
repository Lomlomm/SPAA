import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  registerMode: boolean = false; 
  users: any; 

  constructor(){

  }

  ngOnInit() : void{
    
  }

  registerToggle(): void {
    this.registerMode = !this.registerMode;
  }

  // getUsers(){
  //   this.http.get('https://localhost:5001/api/users').subscribe({
  //     next: response => this.users = response,
  //     error: error => console.log(error),
  //     complete: () => console.log('Request completed')
  //   })
  // }

  cancelRegisterMode(event: boolean): void {
    this.registerMode = event
  }

}
