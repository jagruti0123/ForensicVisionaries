import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api'; // Backend API URL

  constructor(private http: HttpClient) { }

  // Example method to fetch data from backend
  getTest(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/test`);
  }

  // Define the signup method with the correct endpoint
  signup(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, userData); // Corrected URL
  }

  //Define the login method with correct endpoint
  login(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, userData);
  }
}

