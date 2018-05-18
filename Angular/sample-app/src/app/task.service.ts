import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TaskService {

	tasks = ['drink coffee or tea', 'build a web app'];

  constructor(private _http: Http) { }

  retrieveTasks(callback) {
    this._http.get('http://59e52436f99ad9001226825c.mockapi.io/tasks').subscribe( 
      (response)=> { 
        this.tasks = response.json();
        callback(this.tasks);
      }, 
      (error)=> { console.log(error); }
    )
  }
 
  createTask(task){
    this.tasks.push(task);
  }

}
