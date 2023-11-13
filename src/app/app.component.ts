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

  constructor(private accountService: AccountService){}

  // todo inicia aqui 
  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser(){
    const userString = localStorage.getItem("user") //checa si hay algo en el localStorage 
    if(!userString) return;
    const user: UserInterface = JSON.parse(userString)
    this.accountService.setCurrentUser(user)
  }

  logout(){
    this.accountService.logout();
  }
}
