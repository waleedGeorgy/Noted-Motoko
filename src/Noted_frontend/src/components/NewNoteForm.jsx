import PropTypes from "prop-types";
import { useState } from "react";
import TextInput from "./TextInput";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

export default function NewNoteForm(props){

    const [note, setNote] = useState({title: "", content: ""});

    const [inputFocus, setInputFocus] = useState(false);

    function noteHandler(event){
        const {name, value} = event.target;
        setNote({...note, [name]: value});
    }

    function showForm(){
        setInputFocus(true);
    }

    return(
        <div>
            <div className="newNoteForm">
                <TextInput onChange={noteHandler} onFocus={showForm} value={note.title} name="title" placeholder={inputFocus ? "Title" : "Add New Note"} autoFocus={false} />
                {inputFocus && (<TextInput onChange={noteHandler} value={note.content} name="content" placeholder="Take a note..." autoFocus={false} />)}
                {inputFocus && (<Zoom in={inputFocus}>
                    <Fab variant="extended" onClick={() => {
                        props.onSubmit(note);
                        setNote({title: "", content: ""});
                        setInputFocus(false);
                        }}>
                    <AddIcon />Add
                    </Fab>
                </Zoom>)}
            </div>
        </div>
    );
}

NewNoteForm.propTypes = {
    onSubmit: PropTypes.func
}