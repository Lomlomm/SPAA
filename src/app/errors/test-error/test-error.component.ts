import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { response } from 'node_modules copy/@types/express';
import { error } from 'node_modules copy/log-symbols';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss']
})
export class TestErrorComponent implements OnInit {
  
  baseUrl = "https://localhost:5001/api/";
  validationErrors: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void{}

  get404Error(): void {
    this.http.get(this.baseUrl + "buggy/not-found").subscribe({
      next: response => console.log(response), 
      error: error => {
        console.log(error)
        this.validationErrors = error;
      }
    })
  }

  get400Error(): void {
    this.http.get(this.baseUrl + "buggy/bad-request").subscribe({
      next: response => console.log(response), 
      error: error => console.log(error)
    })
  }

  get401Error(): void {
    this.http.get(this.baseUrl + "buggy/auth").subscribe({
      next: response => console.log(response), 
      error: error => console.log(error)
    })
  }

  post400ValidationError(): void {
    this.http.get(this.baseUrl + "account/register", {}).subscribe({
      next: response => console.log(response), 
      error: error => console.log(error)
    })
  }

  get500Error(): void {
    this.http.get(this.baseUrl + "buggy/server-error").subscribe({
      next: response => console.log(response), 
      error: error => console.log(error)
    })
  }
}
