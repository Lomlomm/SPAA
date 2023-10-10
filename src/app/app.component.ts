import { HttpClient } from '@angular/common/http'
import { Component, OnInit  } from '@angular/core';
import { AccountService } from './services/account.service';
import { UserInterface } from './_models/userInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Citas App';
  users: any;
  loggedIn = false;

  constructor(private http: HttpClient, private accountService: AccountService){}

  // todo inicia aqui 
  ngOnInit(): void {
    console.log("on init")
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Request completed')
    });
  }


  setCurrentUser(){
    const userString = localStorage.getItem("user") //checa si hay algo en el localStorage 
    if(!userString) return;
    const user: UserInterface = JSON.parse(userString)
    this.accountService.setCurrentUser(user)
  }

  logout(){
    this.accountService.logout();
    this.loggedIn = false; 
  }
}
