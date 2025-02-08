import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Note(props){
    return(
        <div className="note" id={props.noteId}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={() => {props.deleteNote(props.noteId)}}><DeleteIcon /></button>
        </div>
    );
};

Note.propTypes = {
    noteId: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
    deleteNote: PropTypes.func
};