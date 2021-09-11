import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { Todo } from "../../models";
import { TodoStore } from "../../store";

@Component({
  selector: 'app-todo-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos$: Observable<Todo[]> = of([]);

  constructor(
    private todoStore: TodoStore
  ) {}
  
  ngOnInit(): void {
    this.todos$ = this.todoStore.getTodos();
  }

  addTodo(): void {
    this.todoStore.addTodo({ name: 'Pouet' });
  }

}