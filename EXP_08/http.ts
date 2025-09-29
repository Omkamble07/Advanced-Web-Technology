import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-http',
  standalone: true,
  imports: [CommonModule , HttpClientModule],
  templateUrl: './http.html',
  styleUrl: './http.css'
})
export class HTTP {
  constructor(private httpClient :  HttpClient) {}

  userList : any = [];

  getData(){
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
      this.userList = res;
    })
  }
}
