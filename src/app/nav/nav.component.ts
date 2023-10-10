import { Component } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  model: any = {};
  loggedIn = false; 

  constructor (private accountService: AccountService) {}

  ngOnInit(): void {
    this.getCurrentUser()
  }

  getCurrentUser(){
    // currentUser$ es el observable, los observables se utilizan para compartir estados entre componentes
    this.accountService.currentUser$.subscribe({ // checa en el observavble si existe algo en el localStorage$
      next: user => this.loggedIn = !!user, 
      error: error => console.log(error)
    });
  }

  login(): void { 
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response); 
        this.loggedIn = true;   
      }, 
      error: error => console.log(error)
    });
  }

}
