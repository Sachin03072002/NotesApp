import React, { useContext, useEffect, useRef, useState } from 'react';
import noteContext from "../context/notes/NotesContext";
import AddNote from './AddNote';
import NoteItem from './NoteItem';

export default function Notes() {
    const context = useContext(noteContext);
    const { notes, getNotes, editNote } = context;
    useEffect(() => {
        getNotes();
        // eslint-disable-next-line
    }, []);
    const ref = useRef(null);
    const refClose = useRef(null);
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "default" });
    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });


    }

    const handleClick = (e) => {
        console.log('updating the note', note);
        editNote(note.id, note.etitle, note.edescription, note.etag);
        refClose.current.click();





    }

    const onChange = (e) => {

        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <AddNote />
            <button ref={ref} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ display: 'none' }}>
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">

                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="my-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" aria-describedby="emailHelp" name="etitle" onChange={onChange} value={note.etitle} />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <h2>Your Notes</h2>
                {notes.map((note) => {
                    return <NoteItem key={note._id} updateNote={updateNote} note={note} />
                })}
            </div>
        </>
    )
}
