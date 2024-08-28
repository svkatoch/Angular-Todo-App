import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodolistComponent } from './todolist.component';
import { of } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { Todo } from 'src/models/todo.model';

describe('TodolistComponent', () => {
  let component: TodolistComponent;
  let fixture: ComponentFixture<TodolistComponent>;
  let apiService: jasmine.SpyObj<ApiService>;

  beforeEach(async () => {
    const apiServiceSpy = jasmine.createSpyObj('ApiService', ['getTodos', 'addTodo', 'deleteTodo', 'finishTodo']);

    await TestBed.configureTestingModule({
      declarations: [ TodolistComponent ],
      providers: [
        { provide: ApiService, useValue: apiServiceSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodolistComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should export todos to CSV', () => {
    component.todos = [
     
    ] as Todo[];

  

    component.exportToCSV();

    const csvData = [
      'Title,Date,Status,Category\n',
      'Test Todo 1,2024-08-28,Pending,High\n',
      'Test Todo 2,2024-08-29,Completed,Medium\n'
    ].join('');

    // Test if the CSV data is correctly generated
    expect(window.open).toHaveBeenCalledWith(jasmine.stringMatching(csvData), '_blank');
  });
});
