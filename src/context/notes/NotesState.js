import React from "react";
import NoteContext from "./NotesContext";
import { useState } from "react";
const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitialize = [];
    const [notes, setNotes] = useState(notesInitialize);
    //fetch all note
    const getNotes = async () => {
        //api call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwNzhiZDc0ZGY5NjhkNDc3MDJiZTkwIn0sImlhdCI6MTY3ODI1NDA2Mn0.8RdLcMcpkxH_0Mg7nii8_T69FjDNlqrmCotnxvZ_QHs",
            },

        });

        const json = await response.json();
        console.log(json);
        setNotes(json);
    }



    //add a note
    const addNote = async (title, description, tag) => {
        //api call
        const response = await fetch(`${host}/api/notes/addnotes`, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwNzhiZDc0ZGY5NjhkNDc3MDJiZTkwIn0sImlhdCI6MTY3ODI1NDA2Mn0.8RdLcMcpkxH_0Mg7nii8_T69FjDNlqrmCotnxvZ_QHs",
            },
            body: JSON.stringify({ title, description, tag })
        });
        const note = await response.json();
        setNotes(notes.concat(note));
        //console.log("adding a new note")


    }


    //delete a note
    const deleteNote = async (id) => {
        //api call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwNzhiZDc0ZGY5NjhkNDc3MDJiZTkwIn0sImlhdCI6MTY3ODI1NDA2Mn0.8RdLcMcpkxH_0Mg7nii8_T69FjDNlqrmCotnxvZ_QHs",
            },

        });
        const json = response.json();
        console.log(json);
        // console.log("Deleteing the note ", id);

        const newNotes = notes.filter((note) => { return note._id !== id });

        setNotes(newNotes);
    }



    //edit a node
    const editNote = async (id, title, description, tag) => {
        //api call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwNzhiZDc0ZGY5NjhkNDc3MDJiZTkwIn0sImlhdCI6MTY3ODI1NDA2Mn0.8RdLcMcpkxH_0Mg7nii8_T69FjDNlqrmCotnxvZ_QHs",
            },
            body: JSON.stringify({ title, description, tag })
        });
        // const json = response.json();
        let newNotes = JSON.parse(JSON.stringify(notes))
        //logic to edit in client
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }


        }
        setNotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;