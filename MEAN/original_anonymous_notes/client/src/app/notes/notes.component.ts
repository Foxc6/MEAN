import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router"

import { Note } from "./note"
import { NoteService } from "./note.service"

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
	new_note: Note
  notes

  constructor(private noteService: NoteService, private router: Router) { }

  ngOnInit() {
  	this.new_note = new Note

    this.noteService.allNotes()
        .then(notes => this.notes = notes)
        .catch(err => console.log("get all notes error", err))
  }

  addNote(){
    this.noteService.createNote(this.new_note)
      .then(() => this.noteService.allNotes()
        .then(notes => this.notes = notes)
        .catch(err => console.log("get all notes error", err)) )
      .catch(err => console.log("new note error", err))
      this.notes
  }

}
