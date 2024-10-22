import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TodoModel {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {



  private baseUrl: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient
  ) { }

   // GET request
   get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`);
  }

  // POST request
  post<T>(endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, data);
  }

  // PUT request
  put<T>(endpoint: string, data: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${endpoint}`, data);
  }

  // DELETE request
  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${endpoint}`);
  }

  getTodos(): Observable<TodoModel[]> {
    // ApiService.get() returns an Observable, and we specify <TodoModel[]>
    // to ensure it returns an array of objects matching TodoModel's structure
    return this.http.get<TodoModel[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
