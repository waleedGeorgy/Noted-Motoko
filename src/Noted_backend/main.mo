import List "mo:base/List";
import Debug "mo:base/Debug";
actor DNoted {
  // Creating a placeholder data type for the note that will be created
  public type Note = {
    title: Text;
    content: Text;
  };

  // Creating the list that will hold all the notes
  stable var notes: List.List<Note> = List.nil<Note>();

  // A function that will create the note and add it to the notes list
  public func createNote(noteTitle: Text, noteContent: Text){
    let newNote: Note = {
      title = noteTitle;
      content = noteContent;
    };
    notes := List.push(newNote, notes);
    Debug.print(debug_show(notes));
  };

  // A function that returns the list of notes as an array
  public query func readNotes(): async [Note]{
    return List.toArray(notes);
  };

  // A function that deletes a note based on its index. We need to use a combination of take, drop and append.
  public func removeNote(id: Nat){
    let notesHead = List.take(notes, id);
    let notesTail = List.drop(notes, id + 1);
    notes := List.append(notesHead, notesTail);
  };
}