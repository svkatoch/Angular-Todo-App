import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCheck, faTimes, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Todo } from 'src/models/todo.model';


@Component({
  selector: 'app-todo-content',
  templateUrl: './todo-content.component.html',
  styleUrls: ['./todo-content.component.css']
})
export class TodoContentComponent implements OnInit {
  @Input() todo: Todo;
  @Input() class: string;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter
  @Output() finishTodo: EventEmitter<Todo> = new EventEmitter
  @Output() reopenTodo: EventEmitter<Todo> = new EventEmitter
  todos: Todo[] = [];
  
  faCheck = faCheck;
  faTimes = faTimes;
  faArrow = faArrowAltCircleLeft

  constructor() { }

  ngOnInit() {
    
    }


  deletingTodo(todo: Todo){
    this.deleteTodo.emit(todo)
  }


  finishingTodo(todo: Todo){
    this.finishTodo.emit(todo)
  }

  reopeningTodo(todo: Todo){
    this.reopenTodo.emit(todo)
  }

  filteringCategories(category: String) {
    switch(category) {
      case "High":
        return 'red'
      case "Medium":
        return 'yellow'
      case "Low":
        return 'green'
      
      default:
        return {};
    }
  }
}