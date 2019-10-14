import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {
  tasks = [];
  constructor() { }

  ngOnInit() {
  }
  addTask(task){
    if(task.value!=''){
      this.tasks.push({name:task.value,tick:0});
      task.value = '';
    }
    task.focus();
  }
  delTask(task){
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index,1)
  }
  checkTask(task){
    const index = this.tasks.indexOf(task);
    if(this.tasks[index].tick==0){
      this.tasks[index].tick = 1;
    } 
    else {
      this.tasks[index].tick = 0;
    }
    console.log(this.tasks[index].tick)
  }
}
