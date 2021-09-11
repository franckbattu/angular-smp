import { Store } from "@app/shared/store";
import { Todo, TodoState } from "../models";
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TodoStore extends Store<TodoState> {

  constructor() {
    super({
      todos: []
    });
  }

  getTodos(): Observable<Todo[]> {
    return this.state$.pipe(
      map(s => s.todos)
    )
  }

  addTodo(todo: Todo) {
    this.state.todos.push(todo);
  }

  numberOfTodos() {
    return this.state.todos.length;
  }
}