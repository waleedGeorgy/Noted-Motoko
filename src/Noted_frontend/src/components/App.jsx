import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import NewNoteForm from "./NewNoteForm";
import { useEffect, useState } from "react";
import { Noted_backend } from "../../../declarations/Noted_backend";

export default function App(){

    const [notes, setNotes] = useState([]);

    function createNote(newNote){
        if(newNote.title !== "" && newNote.content !== ""){
            setNotes([newNote, ...notes]);
            Noted_backend.createNote(newNote.title, newNote.content);
        } else {
            alert("Please fill out the form");
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const notesArr = await Noted_backend.readNotes();
        setNotes(notesArr);        
    }

    function deleteNote(noteId){
        Noted_backend.removeNote(noteId);
        setNotes([...notes].filter((note, index) => noteId !== index));
    }

    return(
        <div>
            <Header />
            <NewNoteForm onSubmit={createNote} />
            <div className="main-container">
            {notes.map((entry, index) => {
                return(
                    <Note
                        key={index}
                        noteId={index}
                        title={entry.title}
                        content={entry.content}
                        deleteNote={deleteNote}
                    />
                )
            })}
            </div>
            <Footer />
        </div>
    );
};