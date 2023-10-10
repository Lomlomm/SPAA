import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  registerMode: any; 
  users: any; 

  constructor(private http: HttpClient){

  }

  ngOnInit(){
    this.getUsers(); // muestra todos los usuarios
  }

  registerToggle(): void {
    
  }

  getUsers(){
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Request completed')
    })
  }

  cancelRegisterMode(event: boolean): void {
    this.registerMode = event
  }

}
