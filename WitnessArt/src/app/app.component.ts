import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';  // Import ApiService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Inventory';  // This will remain the same, your app title
  responseMessage: string = '';  // Variable to store the response from backend

  // Inject ApiService in the constructor
  constructor(private apiService: ApiService) {}

  // Fetch data from the backend when the component initializes
  ngOnInit(): void {
    // Calling the getTest method of ApiService to get the message from backend
    this.apiService.getTest().subscribe({
      next: (response) => {
        //this.responseMessage = response.message;
      },
      error: (error) => {
        //this.responseMessage = 'Error connecting to backend';
      }
    });
    
  }
}
