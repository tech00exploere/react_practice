import React, { useState } from "react";
import "./App.css";
import Note from "./notes";

function App(){
  const [notes,setNotes]=useState([]);
  const [input,setInput]=useState("");

  const addNote =()=>{
    if (input.trim()==="")return;
    setNotes([...note,{id:Date.now(,text:input}]);
    setInput("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="App">
      <h1>📝 Notes App</h1>
      <div className="input-area">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Write a note..."
        />
        <button onClick={addNote}>Add</button>
      </div>
      <div className="notes-list">
        {notes.map(note => (
          <Note key={note.id} note={note} deleteNote={deleteNote} />
        ))}
      </div>
    </div>
  );
}

export default App;
