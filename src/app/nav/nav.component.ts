import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Observable, of } from 'rxjs';
import { UserInterface } from '../_models/userInterface';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model: any = {};


  constructor (
    public accountService: AccountService, 
    private router: Router, 
    private toastr: ToastrService) {}

  ngOnInit(): void {
  }

  // getCurrentUser(){
  //   // currentUser$ es el observable, los observables se utilizan para compartir estados entre componentes
  //   this.accountService.currentUser$.subscribe({ // checa en el observavble si existe algo en el localStorage$
  //     next: user => this.loggedIn = !!user, 
  //     error: error => console.log(error)
  //   });
  // }

  login(): void { 
    this.accountService.login(this.model).subscribe({
      next: _ => this.router.navigateByUrl("/members"),
      error: error => this.toastr.error(error.error)
    });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl("/");

  }

}
