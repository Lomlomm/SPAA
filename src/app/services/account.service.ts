import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInterface } from '../_models/userInterface';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private currentUserSource = new BehaviorSubject<UserInterface | null>(null);
  currentUser$ = this.currentUserSource.asObservable(); // siempre que tiene signo de peso $ es un observable 

  baseUrl = environment.apiUrl //No guardan por omision el estado de la sesion. Por eso es stateless 
  // Si reefrescas la p'agina se pierde 

  constructor(private http:HttpClient) { }

  login(model: UserInterface){    
    return this.http.post<UserInterface>(this.baseUrl + "account/login", model).pipe(
      // pipe encadena las llamadas que se ejecuten dentro para ejecutarlas en un orden 
      
      map((response: UserInterface) => {
        const user = response; 
        if(user){
          localStorage.setItem("user", JSON.stringify(user));
          this.currentUserSource.next(user); // al observable le guardamos el usuario
        }
      })
    )
  }

  register(model:any){
    return this.http.post<UserInterface>(this.baseUrl + "account/register", model).pipe(
      map(user => {
        if(user){
          localStorage.setItem("user", JSON.stringify(user)); 
          this.currentUserSource.next(user);
        }
      })
    )
  }

  setCurrentUser(user: UserInterface){
    this.currentUserSource.next(user);
  }

  logout(){
    localStorage.removeItem("user"); 
    this.currentUserSource.next(null)
  }

}
