import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo: Todo = new Todo;

  @Input()
  i!:number;

  @Output()
  tododelete: EventEmitter<Todo>=new EventEmitter();

  @Output()
  todocheckbox:EventEmitter<Todo>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo : Todo) {
    this.tododelete.emit(todo)
    console.log("click!!!")
  }

  onCheckBoxClick(todo:Todo){
    this.todocheckbox.emit(todo);
  }
}
