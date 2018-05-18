import { Injectable } from '@angular/core';
import { Http } from "@angular/http"

import 'rxjs'
import 'rxjs/Rx'


import { Note } from "./note"

@Injectable()
export class NoteService {

  constructor(private http: Http) { }

  createNote(new_note: Note){
    return this.http.post("/addNote", new_note).map(data => data.json()).toPromise()
  }

  allNotes(){
    return this.http.get("/allNotes").map(data => data.json()).toPromise()
  }

}
