import React from "react";
import NoteContext from "./NotesContext";
import { useState } from "react";
const NoteState = (props) => {
    const notesInitialize = [

        {
            "_id": "64082538fdab9c8ea79e8ba6",
            "user": "64078bd74df968d47702be90",
            "title": "My Title",
            "description": "wake up early in the morning",
            "tag": "Personal",
            "date": "2023-03-08T06:03:36.870Z",
            "__v": 0
        },
        {
            "_id": "64082539fdab9c8ea79e8ba8",
            "user": "64078bd74df968d47702be90",
            "title": "My Title",
            "description": "wake up early in the morning",
            "tag": "Personal",
            "date": "2023-03-08T06:03:37.052Z",
            "__v": 0
        },
        {
            "_id": "64082539fdab9c8ea79e8baa",
            "user": "64078bd74df968d47702be90",
            "title": "My Title",
            "description": "wake up early in the morning",
            "tag": "Personal",
            "date": "2023-03-08T06:03:37.218Z",
            "__v": 0
        },
        {
            "_id": "64082539fdab9c8ea79e8baa",
            "user": "64078bd74df968d47702be90",
            "title": "My Title",
            "description": "wake up early in the morning",
            "tag": "Personal",
            "date": "2023-03-08T06:03:37.218Z",
            "__v": 0
        },
        {
            "_id": "64082539fdab9c8ea79e8baa",
            "user": "64078bd74df968d47702be90",
            "title": "My Title",
            "description": "wake up early in the morning",
            "tag": "Personal",
            "date": "2023-03-08T06:03:37.218Z",
            "__v": 0
        },
        {
            "_id": "64082539fdab9c8ea79e8baa",
            "user": "64078bd74df968d47702be90",
            "title": "My Title",
            "description": "wake up early in the morning",
            "tag": "Personal",
            "date": "2023-03-08T06:03:37.218Z",
            "__v": 0
        }

    ]
    const [notes, setNotes] = useState(notesInitialize);

    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;