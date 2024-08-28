import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, map, Observable } from 'rxjs';
import { Todo } from 'src/models/todo.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  api_server_url: string = "http://127.0.0.1:8000/";
  url_todo: string;
  
  constructor(private http: HttpClient) { 

  }

  public getTodos(): Observable<Todo[]>{
     return this.http.get<Todo[]>(this.api_server_url)
     .pipe(
      map(response => response['result'])
      );
     
  }

  public deleteTodo(todo: Todo): Observable<Todo>{
    this.url_todo = `${this.api_server_url}todos/${todo.id}`
    return this.http.delete<Todo>(this.url_todo)
  }

  public addTodo(new_todo: Todo): Observable<Todo>{
    this.url_todo = `${this.api_server_url}todos`
    return this.http.post<Todo>(this.url_todo, new_todo)
    .pipe(map(response => response['result']))
  }

  public finishTodo(todo: Todo): Observable<Todo>{
    this.url_todo = `${this.api_server_url}todos/finish/${todo.id}`
    return this.http.patch<Todo>(this.url_todo, todo)
  }

  public reopenTodo(todo: Todo): Observable<Todo>{
    this.url_todo = `${this.api_server_url}todos/reopen/${todo.id}`
    return this.http.patch<Todo>(this.url_todo, todo)
  }

  public async getHighestId(): Promise<number>{
    this.url_todo = `${this.api_server_url}highest_id`
    this.http.get<number>(this.url_todo).subscribe()

    const result = firstValueFrom(this.http.get<number>(this.url_todo))
    return result
  }
  
}
