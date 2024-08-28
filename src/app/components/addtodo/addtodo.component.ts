import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Todo } from 'src/models/todo.model';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {
  title: String = 'Todo App';
  todos: Todo[] = [];
  form: FormGroup;
  new_todo: Todo;
  faExclamation = faExclamationCircle;
  
  response: number = 0;
  id: number;
  @Output() newTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() class: EventEmitter<string> = new EventEmitter();

  constructor(private fb: FormBuilder, private apiService: ApiService) { 
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(25),
        Validators.required
      ])],
      category: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(15),
        Validators.required
      ])],
      date: ['', Validators.required]  // Add date field to the form
    });
  }
  
  addNewTodo() {
    const title_todo = this.form.controls['title'].value;
    const category = this.form.controls['category'].value;
    const date = this.form.controls['date'].value;  // Retrieve the date
    const done: boolean = false;

    this.new_todo = new Todo(this.id, title_todo, category, date, done);
    this.id++;
    this.newTodo.emit(this.new_todo);
    this.form.reset();
  }

  async ngOnInit() {
    try {
      this.response = await this.apiService.getHighestId();
      this.id = this.response + 1;
    } catch (error) {
      console.log(`Error getting the highest id on database: ${error}`);
      this.id = 1;
    } 
  }
}
